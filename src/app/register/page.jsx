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
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password) {
      setError("Password is invalid");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.status === 400) {
        setError("This email is already registered");
      } else if (res.status === 200) {
        setError("");
        router.push("/login");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };

  return (
    sessionStatus !== "authenticated" && (
      <div className={styles.container}>
        <div className={styles.form}>
          <h1 className={styles.h1}>Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className={styles.input}
              placeholder="Email"
              required
            />
            <input
              type="password"
              className={styles.input}
              placeholder="Password"
              required
            />
            <button type="submit" className={styles.button}>
              Register
            </button>
            <p className={styles.errorMessage}>{error && error}</p>
          </form>
          <div className={styles.orText}>- OR -</div>
          <Link className={styles.registerLink} href="/login">
            Login with an existing account
          </Link>
        </div>
      </div>
    )
  );
};

export default Register;
