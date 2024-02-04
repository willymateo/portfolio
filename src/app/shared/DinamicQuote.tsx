"use client";

import { useCallback, useEffect, useState } from "react";

import { AllQuotesResponse, Quote } from "@/shared/interfaces/FavQs";
import { DINAMIC_QUOTE_INTERVAL } from "@/shared/constants";
import { useActive } from "@/hooks/useActive";
import { Loader } from "./Loader";

interface Props {
  className?: string;
}

const DinamicQuote = ({ className = "" }: Props) => {
  const { isActive: isLoading, enable: startLoading, disable: stopLoading } = useActive();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState<number>(0);
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const fetchQuotes = useCallback(async () => {
    startLoading();

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
    <Loader />;
  }

  return (
    <div className={`flex flex-col items-stretch justify-center ${className}`}>
      <p className="italic text-slate-700">{quotes[currentQuoteIndex]?.body}</p>
      <p className="italic text-slate-500 font-bold text-right">
        {quotes[currentQuoteIndex]?.author}
      </p>
    </div>
  );
};

export { DinamicQuote };
