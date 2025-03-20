import ProductsPage from "@/components/ProductsPage";
import LoadingState from "@/components/LoadingState";
import FirstTimeModal from "@/components/FirstTimeModal";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Suspense } from "react";
import { Metadata } from "next";
import { APP_CONFIG } from "@/lib/config";
import ErrorFallbackComponent from "@/components/ErrorFallbackComponent";

export const metadata: Metadata = {
  title: APP_CONFIG.APP_NAME,
  description: APP_CONFIG.APP_DESCRIPTION,
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <FirstTimeModal />
      <ErrorBoundary fallback={<ErrorFallbackComponent />}>
        <Suspense fallback={<LoadingState />}>
          <ProductsPage />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
