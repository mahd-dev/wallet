import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function OTPPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [otpDigits, setOtpDigits] = useState(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const connectedUser = localStorage.getItem("connected_user");
    if (connectedUser) {
      const user = JSON.parse(connectedUser);
      setEmail(user?.email || null);
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendCooldown > 0) {
      timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendCooldown]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const updatedDigits = [...otpDigits];
    updatedDigits[index] = value;
    setOtpDigits(updatedDigits);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!email) {
      setError("Email not found in localStorage.");
      return;
    }

    const otp = otpDigits.join("");
    if (otp.length !== 4) {
      setError("Please enter all 4 digits.");
      return;
    }

    setLoading(true);
    try {
      const data = new FormData();
      data.append("email", email);
      data.append("otp", otp);

      const response = await fetch("/api/verify-otp", {
        method: "POST",
        body: data,
      });

      const res = await response.json();

      if (res.success) {
        localStorage.setItem("validOtp", "true");
        navigate("/success");
      } else {
        setError(res.error || "Invalid OTP. Please try again.");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resendOtpSubmit = async () => {
    setError(null);
    setSuccess(null);

    if (!email) {
      setError("Email not found in localStorage.");
      return;
    }

    setLoading(true);
    try {
      const data = new FormData();
      data.append("email", email);

      const response = await fetch("/api/resend-otp", {
        method: "POST",
        body: data,
      });

      const res = await response.json();
      if (res.success) {
        setSuccess("OTP resent successfully.");
        setResendCooldown(30);
      } else {
        setError("Failed to resend OTP.");
      }
    } catch {
      setError("An error occurred while resending OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-600 justify-center items-center">
      <div className="w-full max-w-md px-4">
        <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-white/30">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Verify OTP</h2>
            <p className="text-sm text-gray-500 mt-1">
              Enter the 4-digit OTP sent to your email
            </p>
          </div>

          {error && (
            <div className="mb-4 rounded-md bg-red-100 text-red-600 p-3 text-sm text-center border border-red-300">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 rounded-md bg-green-100 text-green-700 p-3 text-sm text-center border border-green-300">
              {success}
            </div>
          )}

          <form onSubmit={handleOtpSubmit} className="space-y-6">
            <div className="flex justify-between gap-3">
              {otpDigits.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-14 h-14 text-center text-xl border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full rounded-lg py-2.5 px-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 ${
                loading
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-500/30"
              }`}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            <div className="text-center mt-3 space-y-2">
              <button
                onClick={resendOtpSubmit}
                type="button"
                disabled={resendCooldown > 0 || loading}
                className={`text-sm ${
                  resendCooldown > 0 || loading
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-indigo-600 hover:underline hover:text-indigo-800 transition"
                }`}
              >
                {resendCooldown > 0
                  ? `Resend OTP in ${resendCooldown}s`
                  : "Resend OTP"}
              </button>

              <div>
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="text-sm text-gray-500 hover:text-gray-700 underline"
                >
                  ← Back to Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
