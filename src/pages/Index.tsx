import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import TransitionArrow from "@/components/TransitionArrow";
import { translations } from "@/data/translations";
import { CheckCircle2, Sparkles } from "lucide-react";
import pickaformLogo from "@/assets/pickaform-logo.png";
import airprocessLogo from "@/assets/airprocess-logo.webp";

type Language = 'fr' | 'en' | 'es';

const Index = () => {
  const [language, setLanguage] = useState<Language>('fr');
  const t = translations[language];

  const handleRedirect = () => {
    window.location.href = "https://app.airprocess.com";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <img src={pickaformLogo} alt="Pickaform" className="h-8" />
            <TransitionArrow />
            <img src={airprocessLogo} alt="AirProcess" className="h-8" />
          </div>
          <LanguageSwitcher 
            currentLanguage={language} 
            onLanguageChange={(lang) => setLanguage(lang as Language)} 
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">{t.announcement}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            {t.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            {t.subtitle}
          </p>

          <Button 
            onClick={handleRedirect}
            size="lg"
            className="text-lg px-8 py-6 rounded-xl hover:scale-105 transition-transform"
          >
            {t.cta}
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            {t.redirectNote}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card border-border">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg mb-6">{t.intro}</p>
              
              <p className="text-foreground mb-6">{t.description}</p>
              
              <p className="text-foreground mb-6">{t.funding}</p>
              
              <p className="text-foreground mb-8">{t.mission}</p>
              
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8">
                <p className="text-lg font-semibold text-primary mb-2">{t.rebranding}</p>
                <p className="text-foreground">{t.newName}</p>
              </div>

              {/* What Changes */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6" />
                  {t.whatChanges}
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{t.change1}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{t.change2}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{t.change3}</span>
                  </li>
                </ul>
              </div>

              {/* What Stays */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  {t.whatStays}
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{t.stay1}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{t.stay2}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{t.stay3}</span>
                  </li>
                </ul>
              </div>

              <p className="text-foreground mb-6">{t.thanks}</p>
              
              <p className="text-foreground mb-4">{t.closing}</p>
              
              <p className="text-primary font-semibold">{t.team}</p>
            </div>
          </Card>

          {/* CTA Bottom */}
          <div className="text-center mt-12">
            <Button 
              onClick={handleRedirect}
              size="lg"
              className="text-lg px-8 py-6 rounded-xl hover:scale-105 transition-transform"
            >
              {t.cta}
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              {t.redirectNote}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-8 mb-4">
            <img src={pickaformLogo} alt="Pickaform" className="h-6 opacity-50" />
            <TransitionArrow />
            <img src={airprocessLogo} alt="AirProcess" className="h-6" />
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 AirProcess. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
