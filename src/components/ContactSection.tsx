'use client';

import React, { useState } from 'react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSent(true);
      setName('');
      setEmail('');
      setProjectType('');
      setMessage('');

      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        {/* Left Side: Copy */}
        <div>
          <h2 className="text-[3rem] md:text-[4.5rem] font-sans font-bold leading-[0.9] tracking-tighter text-[#0a0a0b] mb-6">
            Initiate
            <br />
            <span className="font-serif italic font-medium">Dialogue</span>
          </h2>
          <p className="font-sans text-lg text-zinc-600 max-w-md">
            Whether you have a fully drafted RFP or just a visionary concept, our engineering team is ready to analyze your requirements and propose a rigorous architectural plan.
          </p>
        </div>

        {/* Right Side: Form */}
        <div>
          {sent ? (
            <div className="h-full flex flex-col justify-center items-start">
              <h3 className="font-sans font-bold text-2xl text-[#0a0a0b] mb-2">Inquiry Received</h3>
              <p className="text-zinc-600 font-sans">
                Our team will review your specifications and contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="minimal-input"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="minimal-input"
                  />
                </div>
              </div>

              <div>
                <select
                  required
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="minimal-input cursor-pointer appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2224%22%20height=%2224%22%20fill=%22none%22%20stroke=%22%239ca3af%22%20stroke-width=%221.5%22%3E%3Cpolyline%20points=%226%209%2012%2015%2018%209%22/%3E%3C/svg%3E')] bg-no-repeat bg-[position:right_4px_center] bg-[size:16px] pr-8"
                >
                  <option value="" disabled>Select Project Type</option>
                  <option value="web">Web Application</option>
                  <option value="mobile">Mobile Application</option>
                  <option value="api">Backend & API Systems</option>
                  <option value="consulting">Technical Consulting</option>
                </select>
              </div>

              <div>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your project, timeline, and goals..."
                  className="minimal-input resize-none"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-solid w-full sm:w-auto"
                >
                  {sending ? 'Transmitting...' : 'Submit Inquiry'}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
