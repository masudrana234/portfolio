import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import projects from "../data/projects";
import { Footer } from "../components/Footer";
import { ScrollTop } from "../components/ScrollTop";
import * as S from "../styles/projects";
import * as T from "../styles/styles";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { ArrowRight } from "phosphor-react";
import Github from "../components/Github/Github";
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

interface ProjectsProps {
  target: HTMLInputElement;
}

export default function Projects() {
  const [query, setQuery] = useState("");
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  const handleChange = (e: ProjectsProps) => {
    setQuery(e.target.value);
  };

  const projectFilter = projects.filter((project) =>
    project.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>{currentLang === 'ta' ? 'প্রকল্পসমূহ | মোঃ মাসুদ রানা' : 'Projects | Md. Masud Rana'}</title>
        <meta
          name="description"
          content={currentLang === 'ta' 
            ? 'আমার ব্যবস্থাপনা এবং বিপণন সম্পর্কিত প্রকল্পসমূহ' 
            : 'My management and marketing related projects'}
        />
        <meta property="og:title" content={currentLang === 'ta' ? 'প্রকল্পসমূহ | মোঃ মাসুদ রানা' : 'Projects | Md. Masud Rana'} />
        <meta
          property="og:description"
          content={currentLang === 'ta' 
            ? 'আমার ব্যবস্থাপনা এবং বিপণন সম্পর্কিত প্রকল্পসমূহ' 
            : 'My management and marketing related projects'}
        />
      </Head>

      <ScrollTop />
      <T.Section>
        <T.Title>
          <p>../{currentLang === 'ta' ? 'প্রকল্পসমূহ' : 'projects'}</p>
          {currentLang === 'ta' ? 'প্রকল্পের কাজ' : 'Project Works'}
          <span>
            <HiOutlineDesktopComputer /> {currentLang === 'ta' ? 'প্রকল্পসমূহ' : 'Projects'}
          </span>
        </T.Title>
        <T.Description>
          {currentLang === 'ta' 
            ? 'এখানে আপনি আমার করা কিছু কাজ দেখতে পাবেন। প্রকল্পগুলি কীভাবে তৈরি করা হয়েছে, ব্যবহৃত প্রযুক্তি এবং বাস্তবায়িত বৈশিষ্ট্যগুলি দেখতে ব্রাউজ করুন এবং অন্বেষণ করুন।' 
            : 'Here you can see some of the work I have done. Feel free to browse and explore the projects to see how they were created, the technologies used, and the features implemented.'}
        </T.Description>

        <S.ProjectsContainer>
          <S.ProjectsContent>
            <div className="search">
              <p>{currentLang === 'ta' ? 'প্রকল্পের নাম অনুসন্ধান করুন' : 'Search by project name'}</p>

              <div className="input">
                <input
                  type="text"
                  placeholder={currentLang === 'ta' ? 'এখানে টাইপ করুন...' : 'Type here...'}
                  value={query}
                  onChange={handleChange}
                />
                <FaSearch />
              </div>
            </div>

            {!projectFilter.length && (
              <h3 className="not-found">{currentLang === 'ta' ? 'প্রকল্প পাওয়া যায়নি 🙁' : 'Project not found 🙁'}</h3>
            )}

            {projectFilter.map((project) => {
              return (
                <>
                  <div className="border" key={project.id} />
                  <S.ProjectsItem>
                    <div className="banner">
                      <Image
                        style={{ borderRadius: "20px" }}
                        width={500}
                        height={300}
                        src={project.img}
                        alt={project.title}
                      />
                    </div>

                    <div>
                      <div className="title">
                        <h2>{project.title}</h2>
                      </div>
                      <div className="description">
                        <p>{project.description}</p>
                        <h4 style={{marginBottom:"1rem"}} className="date">
                          {currentLang === 'ta' ? 'প্রযুক্তি স্ট্যাক:' : 'Tech Stack:'}
                        </h4>
                        <div className="tags">
                          {project.tech.map((tag) => {
                            return <span key={tag.name}>{tag.name}</span>;
                          })}
                        </div>
                      </div>
                      <Link href={`/project/${project.url}`}>
                        <T.ButtonAlternatives>
                          {currentLang === 'ta' ? 'প্রকল্প দেখুন' : 'View Project'}
                          <ArrowRight
                            style={{
                              marginBottom: "-0.1rem",
                            }}
                            weight="bold"
                            size={16}
                          />
                        </T.ButtonAlternatives>
                      </Link>
                    </div>
                  </S.ProjectsItem>
                </>
              );
            })}
          </S.ProjectsContent>
        </S.ProjectsContainer>

        <T.Title>
          <p>../github</p>
          {currentLang === 'ta' ? 'গিটহাব প্রোফাইল' : 'Github Profile'}
          <span>
            <HiOutlineDesktopComputer /> {currentLang === 'ta' ? 'পরিসংখ্যান' : 'Stats'}
          </span>
        </T.Title>
        <Github />
        <p className="github">
          {currentLang === 'ta' 
            ? 'আমার আরও প্রকল্প দেখুন ' 
            : 'Check out more projects on '}
          <a href="https://github.com/masudrana234" style={{textDecoration: 'underline'}}>
            {currentLang === 'ta' ? 'আমার গিটহাব' : 'my GitHub'}
          </a>
          !!
        </p>
      </T.Section>
      <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
      <script src={botkey} defer></script>
      <Footer />
    </>
  );
}
