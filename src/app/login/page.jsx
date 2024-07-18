"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "../ui/login/login.module.css";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
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

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/dashboard");
    } else {
      setError("");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      <div className={styles.container}>
        <div className={styles.form}>
          <h1 className={styles.h1}>Login</h1>
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
              Sign In
            </button>
            <p className={styles.errorMessage}>{error && error}</p>
          </form>
          <div className={styles.orText}>- OR -</div>
          <Link className={styles.registerLink} href="/register">
            Register Here
          </Link>
        </div>
      </div>
    )
  );
};

export default Login;
