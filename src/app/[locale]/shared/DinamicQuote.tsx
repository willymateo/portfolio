"use client";

import { useCallback, useEffect, useState } from "react";

import { AllQuotesResponse, Quote } from "@/shared/interfaces/FavQs";
import { DINAMIC_QUOTE_INTERVAL } from "@/shared/constants";
import { NewtonsCradle } from "./Loaders/NewtonsCradle";
import { useActive } from "@/hooks/useActive";

interface Props {
  className?: string;
}

const DinamicQuote = ({ className = "" }: Props) => {
  const { isActive: isLoading, disable: stopLoading } = useActive(true);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState<number>(0);
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const fetchQuotes = useCallback(async () => {
    try {
      const response = await fetch("/api/quotes");
      const { quotes: fetchedQuotes = [] }: AllQuotesResponse = (await response.json()) ?? {};

      setQuotes(fetchedQuotes);
    } catch (err) {
      console.log("Error fetching quotes", err);
    }

    stopLoading();
  }, []);

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  useEffect(() => {
    const intervalId = setInterval(
      () => setCurrentQuoteIndex(prevState => (prevState + 1) % quotes.length),
      DINAMIC_QUOTE_INTERVAL,
    );

    return () => clearInterval(intervalId);
  }, [quotes]);

  if (isLoading) {
    return <NewtonsCradle />;
  }

  return (
    <div className={`flex flex-col items-stretch justify-center ${className}`}>
      <p className="italic text-darkosPortfolio-black dark:text-darkosPortfolio-gray">
        {quotes[currentQuoteIndex]?.body}
      </p>

      <p className="italic text-darkosPortfolio-black dark:text-darkosPortfolio-gray font-bold text-right">
        {quotes[currentQuoteIndex]?.author}
      </p>
    </div>
  );
};

export { DinamicQuote };
