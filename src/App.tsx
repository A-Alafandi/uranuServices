import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";

// Your files live under src/components (per your error path), so lazy import from there:
const JobApplication = lazy(() => import("@/components/JobApplication"));
const Course = lazy(() => import("@/components/Course")); // Opleiding page

export function App() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Header />

            <main className="flex-1">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <Features />
                                <Services />
                                <ContactForm />
                            </>
                        }
                    />

                    <Route
                        path="/Vacatures"
                        element={
                            <Suspense fallback={null}>
                                <JobApplication />
                            </Suspense>
                        }
                    />

                    <Route
                        path="/opleiding"
                        element={
                            <Suspense fallback={null}>
                                <Course />
                            </Suspense>
                        }
                    />

                    {/* Section aliases */}
                    <Route path="/diensten" element={<Navigate to="/#diensten" replace />} />
                    <Route path="/over-ons" element={<Navigate to="/#over-ons" replace />} />
                    <Route path="/contact" element={<Navigate to="/#contact" replace />} />

                    {/* Catch-all: redirect home (no NotFound component needed) */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}
