import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script'
import blog from '../data/blogs';
import { Footer } from '../components/Footer';
import { ScrollTop } from '../components/ScrollTop';
import * as S from '../styles/Blogs';
import { FiltersContainer, BButton} from '../styles/Blogs';
import * as T from '../styles/styles';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';
import { ArrowRight } from 'phosphor-react';
import { Publications } from '../components/Publications';
import { Button } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { NewsletterForm } from '../components/Newsletter';

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

interface BlogProps {
  target: HTMLInputElement;
}

export default function Blog() {
  const [query, setQuery] = useState('');
  const [sortCriteria, setSortCriteria] = useState('date');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [readTime, setReadTime] = useState('');

  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'bn'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'bn');
  }, [router.locale]);

  const handleChange = (e: BlogProps) => {
    setQuery(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortCriteria(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const handleReadTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setReadTime(e.target.value);
  };

  const handleClearFilters = () => {
    setQuery('');
    setSortCriteria('date');
    setSelectedCategory('');
    setStartDate('');
    setEndDate('');
    setReadTime('');
  };

  const filteredBlogs = blog
    .filter(blog => {
      const matchesQuery = blog.title[currentLang].toLowerCase().includes(query.toLowerCase());
      return matchesQuery;
    })
    .filter(blog => {
      const matchesCategory = selectedCategory === '' || blog.tags.some(tag => tag.name === selectedCategory);
      return matchesCategory;
    })
    .filter(blog => {
      const [day, month, year] = blog.date[currentLang].split('/').map(Number);
      const blogDate = new Date(year, month - 1, day).getTime();
      const start = startDate ? new Date(startDate).getTime() : -Infinity;
      const end = endDate ? new Date(endDate).getTime() : Infinity;
      const matchesDate = blogDate >= start && blogDate <= end;
      return matchesDate;
    })
    .filter(blog => {
      const readTimeValue = parseInt(blog.read[currentLang]);
      const readTimeFilter = readTime ? parseInt(readTime) : -Infinity;
      const matchesReadTime = readTimeFilter === -Infinity || readTimeValue === readTimeFilter;
      return matchesReadTime;
    });

  const sortedBlogs = filteredBlogs.sort((a, b) => {
    if (sortCriteria === 'date') {
      const [dayA, monthA, yearA] = a.date[currentLang].split('/').map(Number);
      const [dayB, monthB, yearB] = b.date[currentLang].split('/').map(Number);
      return new Date(yearB, monthB - 1, dayB).getTime() - new Date(yearA, monthA - 1, dayA).getTime();
    }
    return a.title[currentLang].localeCompare(b.title[currentLang]);
  });

  return (
    <>
      <Head>
        <title>{currentLang === 'bn' ? 'ব্লগ | মোঃ মাসুদ রানা' : 'Blogs | Md. Masud Rana'}</title>
        <meta property="og:title" content={currentLang === 'bn' ? 'ব্লগ | মোঃ মাসুদ রানা' : 'Blogs | Md. Masud Rana'} />
        <meta name="description" content={currentLang === 'bn' ? 'ব্যবস্থাপনা, বিপণন এবং প্রযুক্তি সম্পর্কে আমার চিন্তাভাবনা' : 'My thoughts on management, marketing and technology'} />
      </Head>

      <ScrollTop />
      <T.Section>
        <T.Title>
          <p>../{currentLang === 'bn' ? 'ব্লগ' : 'blogs'}</p>
          {currentLang === 'bn' ? 'পোস্টসমূহ' : 'Posts'}
          <span>
            <HiOutlineDesktopComputer />{currentLang === 'bn' ? 'ব্লগ' : 'Blog'}
          </span>
        </T.Title>
        <T.Description>
          {currentLang === 'bn' ? 'আমি ব্যবস্থাপনা কৌশল, ডিজিটাল মার্কেটিং এবং প্রযুক্তি সম্পর্কে লিখি। আমার চিন্তাভাবনা এবং অভিজ্ঞতা অন্বেষণ করতে নির্দ্বিধায় পড়ুন!' : 'I write about management strategies, digital marketing and technology. Feel free to explore my thoughts and experiences!'}
        </T.Description>

        <S.BlogContainer>
          <S.BlogContent>
            <div className="search">
              <p>{currentLang === 'bn' ? 'ব্লগ নামে অনুসন্ধান করুন' : 'Search by Blog name'}</p>
              <div className="input">
                <input
                  type="text"
                  name="search"
                  placeholder={currentLang === 'bn' ? 'এখানে টাইপ করুন...' : 'Type here...'}
                  value={query}
                  onChange={handleChange}
                />
                <FaSearch />
              </div>
            </div>

            <FiltersContainer>
              <select onChange={handleSortChange} value={sortCriteria}>
                <option value="date">{currentLang === 'bn' ? 'তারিখ অনুযায়ী সাজান' : 'Sort by Date'}</option>
                <option value="title">{currentLang === 'bn' ? 'শিরোনাম অনুযায়ী সাজান' : 'Sort by Title'}</option>
              </select>

              <select onChange={handleCategoryChange} value={selectedCategory}>
                <option value="">{currentLang === 'bn' ? 'সব বিভাগ' : 'All Categories'}</option>
                {Array.from(new Set(blog.flatMap(blog => blog.tags.map(tag => tag.name)))).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <div className="date-filters">
                <label>
                  {currentLang === 'bn' ? 'থেকে:' : 'From:'}
                  <input type="date" value={startDate} onChange={handleStartDateChange} />
                </label>
                <label>
                  {currentLang === 'bn' ? 'পর্যন্ত:' : 'To:'}
                  <input type="date" value={endDate} onChange={handleEndDateChange} />
                </label>
              </div>

              <div className="read-time-filters">
                <label>
                  {currentLang === 'bn' ? 'পড়ার সময়:' : 'Read Time:'}
                  <select onChange={handleReadTimeChange} value={readTime}>
                    <option value="">{currentLang === 'bn' ? 'সব পড়ার সময়' : 'All Read Times'}</option>
                    {Array.from(new Set(blog.map(blog => blog.read[currentLang]))).map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </label>
              </div>
            </FiltersContainer>

            <BButton onClick={handleClearFilters}>
              {currentLang === 'bn' ? 'ফিল্টার সাফ করুন' : 'Clear Filters'}
            </BButton>

            {!sortedBlogs.length && (
              <h3 className="not-found">{currentLang === 'bn' ? 'কোন ব্লগ পাওয়া যায়নি 🙁' : 'Blog not found 🙁'}</h3>
            )}

            {sortedBlogs.map(blog => (
              <div key={blog.id}>
                <div className="border" />
                <S.BlogItem>
                  <div className="banner">
                    <Image
                      style={{ borderRadius: "20px" }}
                      width={500}
                      height={300}
                      src={blog.img}
                      alt={blog.title[currentLang]}
                    />
                  </div>
                  <div>
                    <div className="title">
                      <h2>{blog.title[currentLang]}</h2>
                    </div>
                    <div className="description">
                      <p>{blog.description[currentLang]}</p>
                      <p className="date">{currentLang === 'bn' ? 'প্রকাশের তারিখ:' : 'Date Published:'} {blog.date[currentLang]}</p>
                      <p className="read">{currentLang === 'bn' ? 'পড়ার সময়:' : 'Reading Time:'} {blog.read[currentLang]}</p>
                      <div className="tags">
                        {blog.tags.map(tag => (
                          <span key={tag.name}>{tag.name}</span>
                        ))}
                      </div>
                    </div>
                    <Link href={`/blog/${blog.id}`}>
                      <T.ButtonAlternatives>
                        {currentLang === 'bn' ? 'ব্লগ দেখুন' : 'View Blog'}
                        <ArrowRight
                          style={{ marginBottom: '-0.1rem' }}
                          weight="bold"
                          size={16}
                        />
                      </T.ButtonAlternatives>
                    </Link>
                  </div>
                </S.BlogItem>
              </div>
            ))}

            <p className="github">
              {currentLang === 'bn' ? 'আমার আরও ব্লগ পড়ুন ' : 'Read more of my blogs on '}
              <a href="https://masudrm.blogspot.com/">{currentLang === 'bn' ? 'এখানে' : 'here'}</a>!!
            </p>
          </S.BlogContent>
        </S.BlogContainer>
        <NewsletterForm />
      </T.Section>
      <Publications />
      <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
      <script src={botkey} defer></script>
      <Footer />
    </>
  );
}
