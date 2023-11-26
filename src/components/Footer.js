import React from "react";

function Footer() {
  return (
    <div className="text-white font-mono mb-3 bg-slate-900 py-20 text-right px-12">
            <div className="text-white text-center h-1/5">
                    <h1 className="text-4xl font-bold mb-4">Serving Revelstoke, BC since 2019</h1>
                    <h2 className="text-xl">Family Owned and Operated, Blue Arrow Electric</h2>
                </div>
      <p>&copy; {new Date().getFullYear()} Blue Arrow Electric Ltd.</p>
    </div>
  );
}

export default Footer;
