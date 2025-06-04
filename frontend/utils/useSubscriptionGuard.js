import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function useSubscriptionGuard() {
  const router = useRouter();
  useEffect(() => {
    fetch('/api/subscription')
      .then(res => res.json())
      .then(sub => {
        if (!sub || sub.status !== 'active') {
          router.push('/account');
        }
      })
      .catch(() => router.push('/account'));
  }, [router]);
}
