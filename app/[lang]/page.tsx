"use client";
import {useTranslations} from 'next-intl';
import {Link, useRouter} from '@/routing';
import { usePathname } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLang, setSelectedLang] = useState('');

  // Effect to update the selected language when the URL changes
  useEffect(() => {
    const currentLang = pathname.split('/')[1]; // Assuming language is the first part of the URL
    setSelectedLang(currentLang);
  }, [pathname]);


  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const lang =  e.target.value;
    router.replace(`${lang}`);
  }

  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/users">{t('users')}</Link>
      <div>
        <select value={selectedLang} onChange={handleChange}>
          <option value="en">en</option>
          <option value="si">si</option>
        </select>
      </div>
    </div>
  );
}