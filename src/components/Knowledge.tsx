import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
type Article = {
  id: string;
  titleKey: string;
  contentKey: string;
};

// ***> Line 72 and 76 is working fine, ignore the error marking <***

const Knowledge = () => {
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);
  const { t } = useLanguage();

  const articles = [
    {
      id: "article1",
      titleKey: "knowledgeArticle.article1.title",
      contentKey: "knowledgeArticle.article1.content",
    },
    {
      id: "article2",
      titleKey: "knowledgeArticle.article2.title",
      contentKey: "knowledgeArticle.article2.content",
    },
    {
      id: "article3",
      titleKey: "knowledgeArticle.article3.title",
      contentKey: "knowledgeArticle.article3.content",
    },
    {
      id: "article4",
      titleKey: "knowledgeArticle.article4.title",
      contentKey: "knowledgeArticle.article4.content",
    },
    {
      id: "article5",
      titleKey: "knowledgeArticle.article5.title",
      contentKey: "knowledgeArticle.article5.content",
    }
  ];



  return (
      <section className="bg-black py-16" id="knowledge">
        <div className="container-custom">
          <h2 className="section-title text-center text-white mb-12">
            {t("knowledgeArticle.title")}
          </h2>

          <Accordion
              type="single"
              collapsible
              className="w-full"
              value={expandedArticle || undefined}
              onValueChange={(value) => setExpandedArticle(value)}
          >
            {articles.map((article) => (
                <AccordionItem
                    key={article.id}
                    value={article.id}
                    className="border-b border-vndax-lightgray"
                >
                  <AccordionTrigger className="py-6 text-left hover:text-vndax-green">
                    <span className="text-lg font-medium">{t(article.titleKey)}</span>
                  </AccordionTrigger>

                  <AccordionContent className="py-4 text-gray-300">
                    <p className="mb-4">{t(article.contentKey)}</p>
                  </AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>

          <div className="flex justify-center mt-8">
            <Button
                variant="outline"
                className="border-vndax-green text-vndax-green hover:bg-vndax-green hover:text-white"
            >
              {t("knowledgeArticle.viewAll")}
            </Button>
          </div>
        </div>
      </section>
  );
};
// ***> Line 72 and 76 is working fine, ignore the error marking <***
export default Knowledge;
