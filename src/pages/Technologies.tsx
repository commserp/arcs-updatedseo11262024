import React from 'react';
import { Helmet } from 'react-helmet-async';
import Technologies from '../components/Technologies';
import { ParticleBackground } from '../components/animations';

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Helmet>
        <title>Core Technologies | ARCS Scientific</title>
        <meta
          name="description"
          content="Explore ARCS Scientific's advanced technologies powering next-generation regulatory compliance, from neural processing to quantum-inspired systems."
        />
        <meta
          name="keywords"
          content="neural processing, quantum computing, deep learning, secure computing, process automation, hardware integration, AI technology"
        />
        <meta
          property="og:title"
          content="Core Technologies | ARCS Scientific"
        />
        <meta
          property="og:description"
          content="Discover our cutting-edge technologies enabling next-generation regulatory compliance through quantum precision and real-time intelligence."
        />
        <link
          rel="canonical"
          href="https://www.arcsscientific.com/technologies"
        />
        <meta name="author" content="James Scott DC Institute" />
      </Helmet>

      <ParticleBackground />

      <div className="pt-20">
        <Technologies />
      </div>
    </div>
  );
}
