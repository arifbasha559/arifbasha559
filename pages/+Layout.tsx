import { useState } from "react";
import InitLoader from "../src/components/InitLoader";
import "./App.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
      <div className="select-none">
        
      {loading && <InitLoader onFinish={() => setLoading(false)} />}
      {children}
    </div>
  );
}
