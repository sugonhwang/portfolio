"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

// '동작 줄이기' 사용자는 globals.css의 [data-fade] 규칙으로 애니메이션 없이 바로 보인다
export default function FadeIn({ children, className }: Props) {
  return (
    <motion.div data-fade className={className} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.3, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}
