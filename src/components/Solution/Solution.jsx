import React, { useState } from "react";
import { motion } from "framer-motion";
export default function Solution() {
  return (
    <motion.div
      className="w-100 vh-100 display-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Solution
    </motion.div>
  );
}
