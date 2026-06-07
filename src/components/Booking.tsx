"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dog, Cat, Bird, Rabbit, PawPrint, ArrowRight, Check, MapPin, Clock, Loader2 } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Booking() {
  const [step, setStep] = useState(1);
  const [branch, setBranch] = useState<"ganeshganj" | "kesharbagh" | null>(null);
  const [petType, setPetType] = useState<"dog" | "cat" | "bird" | "rabbit" | "other" | null>(null);
  const [petName, setPetName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleBranchSelect = (type: "ganeshganj" | "kesharbagh") => {
    setBranch(type);
    setStep(2);
  };

  const handlePetSelect = (type: "dog" | "cat" | "bird" | "rabbit" | "other") => {
    setPetType(type);
    setStep(3);
  };

  const handleNextStep = () => {
    if (step === 3 && petName.trim() !== "") {
      setStep(4);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const sanitizedPhone = phone.replace(/\D/g, "");
    if (email.trim() === "" || sanitizedPhone.length !== 10) return;

    // Rate limiting: 1 booking every 30 seconds per device
    const lastBooking = localStorage.getItem("lastBookingTimestamp");
    if (lastBooking) {
      const diff = Date.now() - parseInt(lastBooking, 10);
      if (diff < 30000) {
        const secondsLeft = Math.ceil((30000 - diff) / 1000);
        setSubmitError(`Please wait ${secondsLeft} seconds before making another booking.`);
        return;
      }
    }

    setIsLoading(true);
    setSubmitError(null);

    try {
      await addDoc(collection(db, "bookings"), {
        branch,
        petType,
        petName: petName.trim(),
        email: email.trim(),
        phone: `+91 ${sanitizedPhone}`,
        status: "pending",
        createdAt: serverTimestamp(),
      });
      localStorage.setItem("lastBookingTimestamp", Date.now().toString());
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error saving booking:", error);
      setSubmitError("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  const getBranchDetails = () => {
    if (branch === "ganeshganj") {
      return {
        name: "Ganeshganj Branch",
        address: "55 Ganeshganj, Indore (near Antim Square, Rajmohalla) - 452202",
        timing: "Monday to Saturday: 10 AM to 9 PM",
        drAvailability: "Doctor's Availability: Morning 10 AM - 2 PM, Evening 6 PM - 9 PM"
      };
    }
    return {
      name: "Kesharbagh Road Branch",
      address: "G-42 A, in front of Palash Parisar, Kesharbagh Road, Indore",
      timing: "Monday to Sunday: 10 AM to 9 PM",
      drAvailability: "Doctor's Availability: Afternoon 2 PM - 5 PM"
    };
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <span className="font-sans text-xs uppercase tracking-widest text-sage font-semibold">
          Appointments
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-semibold">
          Begin your journey.
        </h2>
      </div>

      <div className="bg-white border border-stone-200/40 rounded-[40px] p-8 md:p-12 shadow-[0_20px_50px_rgba(43,41,39,0.03)] min-h-[420px] flex flex-col justify-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key={`step-${step}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* Step 1: Select Branch */}
              {step === 1 && (
                <div className="space-y-8">
                  <div className="text-center space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-medium">
                      Step 1: Which location are you visiting?
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
                      Choose your preferred clinic branch to view operating hours and doctor schedules.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => handleBranchSelect("ganeshganj")}
                      className={`p-6 rounded-[28px] border-2 text-left flex flex-col justify-between transition-colors duration-300 cursor-pointer ${
                        branch === "ganeshganj"
                          ? "border-terracotta bg-stone-50/50"
                          : "border-stone-200/60 bg-white hover:border-stone-300"
                      }`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-terracotta">
                          <MapPin className="w-5 h-5" />
                          <span className="font-serif font-semibold text-lg">Ganeshganj Branch</span>
                        </div>
                        <p className="font-sans text-stone-600 text-xs sm:text-sm leading-relaxed">
                          55 Ganeshganj, Indore (near Antim Square, Rajmohalla) - 452202
                        </p>
                        <div className="space-y-1.5 pt-2 border-t border-stone-200/30 text-stone-500 font-sans text-xs">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            <span>Mon - Sat: 10 AM - 9 PM</span>
                          </div>
                          <p className="pl-5 text-sage font-semibold">Dr: 10 AM - 2 PM, 6 PM - 9 PM</p>
                        </div>
                      </div>
                    </motion.button>

                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => handleBranchSelect("kesharbagh")}
                      className={`p-6 rounded-[28px] border-2 text-left flex flex-col justify-between transition-colors duration-300 cursor-pointer ${
                        branch === "kesharbagh"
                          ? "border-terracotta bg-stone-50/50"
                          : "border-stone-200/60 bg-white hover:border-stone-300"
                      }`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-terracotta">
                          <MapPin className="w-5 h-5" />
                          <span className="font-serif font-semibold text-lg">Kesharbagh Road</span>
                        </div>
                        <p className="font-sans text-stone-600 text-xs sm:text-sm leading-relaxed">
                          G-42 A, in front of Palash Parisar, Kesharbagh Road, Indore
                        </p>
                        <div className="space-y-1.5 pt-2 border-t border-stone-200/30 text-stone-500 font-sans text-xs">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            <span>Mon - Sun: 10 AM - 9 PM</span>
                          </div>
                          <p className="pl-5 text-sage font-semibold">Dr: 2 PM - 5 PM</p>
                        </div>
                      </div>
                    </motion.button>
                  </div>
                </div>
              )}

              {/* Step 2: Who are we seeing today? */}
              {step === 2 && (
                <div className="space-y-8 text-center">
                  <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-medium">
                    Step 2: Who are we seeing today?
                  </h3>
                  <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto w-full">
                    {[
                      { type: "dog", label: "A Dog", icon: Dog },
                      { type: "cat", label: "A Cat", icon: Cat },
                      { type: "bird", label: "A Bird", icon: Bird },
                      { type: "rabbit", label: "A Rabbit / Small Pet", icon: Rabbit },
                      { type: "other", label: "Other Pet", icon: PawPrint },
                    ].map((pet) => {
                      const IconComponent = pet.icon;
                      return (
                        <motion.button
                          key={pet.type}
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handlePetSelect(pet.type as any)}
                          className={`w-[45%] sm:w-32 h-32 rounded-[24px] border-2 flex flex-col items-center justify-center gap-2.5 transition-colors duration-300 cursor-pointer ${
                            petType === pet.type
                              ? "border-terracotta bg-stone-50/50 text-terracotta"
                              : "border-stone-200/60 bg-white text-stone-400 hover:border-stone-300"
                          }`}
                        >
                          <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={1.5} />
                          <span className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-charcoal text-center px-1 leading-tight">
                            {pet.label}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>
                  <div className="flex justify-start max-w-sm mx-auto">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="font-sans text-xs font-semibold uppercase tracking-wider text-stone-400 hover:text-charcoal transition-colors"
                    >
                      Back
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: What is their name? */}
              {step === 3 && (
                <div className="space-y-8 max-w-md mx-auto w-full">
                  <h3 className="font-serif text-xl sm:text-2xl text-charcoal text-center font-medium">
                    Step 3: What is their name?
                  </h3>
                  <div className="relative pt-4">
                    <input
                      type="text"
                      autoFocus
                      required
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleNextStep();
                        }
                      }}
                      placeholder="Type their name here..."
                      className="w-full border-b border-stone-300 bg-transparent text-xl sm:text-2xl font-serif text-charcoal outline-none pb-2 focus:border-terracotta focus:border-b-2 transition-all duration-300 placeholder:text-stone-300 placeholder:italic"
                    />
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="font-sans text-xs font-semibold uppercase tracking-wider text-stone-400 hover:text-charcoal transition-colors"
                    >
                      Back
                    </button>
                    <motion.button
                      type="button"
                      disabled={petName.trim() === ""}
                      whileHover={petName.trim() !== "" ? { scale: 1.02 } : {}}
                      whileTap={petName.trim() !== "" ? { scale: 0.98 } : {}}
                      onClick={handleNextStep}
                      className={`flex items-center gap-2 px-6 py-3 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all ${
                        petName.trim() !== ""
                          ? "bg-terracotta text-white shadow-md hover:bg-terracotta/95 cursor-pointer"
                          : "bg-stone-100 text-stone-300 cursor-not-allowed"
                      }`}
                    >
                      Continue <ArrowRight className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>
                </div>
              )}

              {/* Step 4: Email Info */}
              {step === 4 && (
                <div className="space-y-8 max-w-md mx-auto w-full">
                  <h3 className="font-serif text-xl sm:text-2xl text-charcoal text-center font-medium">
                    Step 4: What is your email address?
                  </h3>
                  <div className="relative pt-4">
                    <input
                      type="email"
                      required
                      autoFocus
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          if (email.trim() !== "") {
                            setStep(5);
                          }
                        }
                      }}
                      placeholder="Enter your email address..."
                      className="w-full border-b border-stone-300 bg-transparent text-xl sm:text-2xl font-serif text-charcoal outline-none pb-2 focus:border-terracotta focus:border-b-2 transition-all duration-300 placeholder:text-stone-300 placeholder:italic"
                    />
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="font-sans text-xs font-semibold uppercase tracking-wider text-stone-400 hover:text-charcoal transition-colors"
                    >
                      Back
                    </button>
                    <motion.button
                      type="button"
                      disabled={email.trim() === ""}
                      whileHover={email.trim() !== "" ? { scale: 1.02 } : {}}
                      whileTap={email.trim() !== "" ? { scale: 0.98 } : {}}
                      onClick={() => setStep(5)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all ${
                        email.trim() !== ""
                          ? "bg-terracotta text-white shadow-md hover:bg-terracotta/95 cursor-pointer"
                          : "bg-stone-100 text-stone-300 cursor-not-allowed"
                      }`}
                    >
                      Continue <ArrowRight className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>
                </div>
              )}

              {/* Step 5: Phone Info */}
              {step === 5 && (
                <div className="space-y-8 max-w-md mx-auto w-full">
                  <h3 className="font-serif text-xl sm:text-2xl text-charcoal text-center font-medium">
                    Step 5: What is your phone number?
                  </h3>
                  <div className="relative pt-4 flex items-center">
                    <span className="text-xl sm:text-2xl font-serif text-charcoal/60 pb-2 border-b border-stone-300 mr-3 select-none">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      autoFocus
                      maxLength={10}
                      value={phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, "");
                        setPhone(val);
                      }}
                      placeholder="Enter 10-digit number"
                      className="w-full border-b border-stone-300 bg-transparent text-xl sm:text-2xl font-serif text-charcoal outline-none pb-2 focus:border-terracotta focus:border-b-2 transition-all duration-300 placeholder:text-stone-300 placeholder:italic"
                    />
                  </div>
                  {submitError && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 font-sans text-xs text-center"
                    >
                      {submitError}
                    </motion.p>
                  )}
                  <div className="flex justify-between items-center pt-4">
                    <button
                      type="button"
                      disabled={isLoading}
                      onClick={() => setStep(4)}
                      className="font-sans text-xs font-semibold uppercase tracking-wider text-stone-400 hover:text-charcoal transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Back
                    </button>
                    <motion.button
                      type="submit"
                      disabled={phone.length !== 10 || isLoading}
                      whileHover={phone.length === 10 && !isLoading ? { scale: 1.02 } : {}}
                      whileTap={phone.length === 10 && !isLoading ? { scale: 0.98 } : {}}
                      className={`flex items-center gap-2 px-6 py-3 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all ${
                        phone.length === 10 && !isLoading
                          ? "bg-sage text-white shadow-md hover:bg-sage/95 cursor-pointer"
                          : "bg-stone-100 text-stone-300 cursor-not-allowed"
                      }`}
                    >
                      {isLoading ? (
                        <>
                          Booking... <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        </>
                      ) : (
                        <>
                          Book Visit <Check className="w-3.5 h-3.5" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              )}
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 90, damping: 16 }}
              className="text-center space-y-6 max-w-md mx-auto w-full"
            >
              <div className="w-16 h-16 rounded-full bg-sage/10 text-sage flex items-center justify-center mx-auto shadow-sm">
                <Check className="w-7 h-7" strokeWidth={2.5} />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-semibold">
                  We'll see you soon.
                </h3>
                <div className="font-sans text-stone-500 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    Thank you for trusting us with your family. We will contact you soon at{" "}
                    <span className="font-semibold text-charcoal">+91 {phone}</span> to coordinate your arrival and confirm your appointment.
                  </p>
                  <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200/40 text-left space-y-2 text-xs sm:text-sm">
                    <p className="font-semibold text-charcoal font-serif">{getBranchDetails().name}</p>
                    <p className="text-stone-600 leading-normal">{getBranchDetails().address}</p>
                    <p className="text-stone-500">{getBranchDetails().timing}</p>
                    <p className="text-sage font-semibold">{getBranchDetails().drAvailability}</p>
                  </div>
                  <p className="text-xs">
                    We can't wait to welcome you and your beloved <span className="font-semibold text-terracotta">{petName}</span>.
                  </p>
                </div>
              </div>
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setStep(1);
                  setBranch(null);
                  setPetType(null);
                  setPetName("");
                  setEmail("");
                  setPhone("");
                  setIsSubmitted(false);
                }}
                className="mt-4 px-6 py-2.5 border border-stone-200 hover:border-stone-300 text-stone-500 hover:text-charcoal rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all"
              >
                Book Another Appointment
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
