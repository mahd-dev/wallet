import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function OTPPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const connectedUser = localStorage.getItem("connected_user");
    if (connectedUser) {
      const user = JSON.parse(connectedUser);
      setEmail(user?.email || null);
    }
  }, []);

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!email) {
      setError("Email not found in localStorage.");
      setLoading(false);
      return;
    }

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
        navigate("/");
      } else {
        if (res.error) {
          return setError(res.error);
        }
        setError("Invalid OTP. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resendOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!email) {
      setError("Email not found in localStorage.");
      setLoading(false);
      return;
    }

    try {
      const data = new FormData();
      data.append("email", email);
      const response = await fetch("/api/resend-otp", {
        method: "POST",
        body: data,
      });

      const res = await response.json();

      if (res.success) {
        setError("");
      } else {
        setError("Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h2 className="mb-6 text-center text-3xl font-semibold text-gray-800">
          Enter OTP
        </h2>
        {error && (
          <p className="mb-4 text-center text-sm text-red-500">{error}</p>
        )}
        <form onSubmit={handleOtpSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="otp"
              className="block text-sm font-medium text-gray-700"
            >
              OTP
            </label>
            <input
              id="otp"
              type="text"
              className="mt-1 w-full rounded-lg border px-3 py-2 text-gray-800 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
        <form onSubmit={resendOtpSubmit} className="space-y-5">
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-gray-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Resend OTP
          </button>
        </form>
      </div>
    </div>
  );
}
