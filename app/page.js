"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/robot.webp"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              AI Interview Mocker
              <br className="hidden lg:inline-block" />
              <span className="text-primary">Practice Makes Perfect</span>
            </h1>
            <p className="mb-8 leading-relaxed">
              Don't Fear the Interview! Prepare with AI Interview Mocker. We use
              Gemini API to provide a vast pool of realistic interview
              questions. Simulate real interviews with camera and microphone
              functionality, and leverage speech-to-text technology to analyze
              and save your responses. Track your progress and build confidence
              for your next interview.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => router.push("/dashboard")}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Practice Now
              </button>
              <button
                onClick={() => router.push("/dashboard/upgrade")}
                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              >
                Upgrade
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
