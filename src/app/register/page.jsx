"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import styles from "../ui/register/signup.module.css";

const Register = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!username) {
      setError("Username is required");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (res.status === 400) {
        setError("This email is already registered");
      } else if (res.status === 201) {
        setError("");
        router.push("/login");
      }
    } catch (error) {
      setError("Error, please try again");
      console.error(error);
    }
  };

  return (
    sessionStatus !== "authenticated" && (
      <div className={styles.container}>
        <div className={styles.form}>
          <h1 className={styles.title}>Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
            />
            <input type="text" name="email" placeholder="Email" required />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit">Register</button>
            {error && <p className={styles.errorMessage}>{error}</p>}
          </form>
          <div className={styles.orText}>- OR -</div>
          <Link className={styles.link} href="/login">
            Login with an existing account
          </Link>
        </div>
      </div>
    )
  );
};

export default Register;
