import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "./search/SearchBar";
import { useState } from "react";

export const Hero = () => {
  const navigate = useNavigate();
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    console.error("Error loading video in Hero component");
    setVideoError(true);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Vidéo en arrière-plan */}
      <div className="absolute inset-0 w-full h-full">
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            onError={handleVideoError}
            className="object-cover w-full h-full"
          >
            <source
              src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
          </video>
        ) : (
          <div className="w-full h-full bg-gray-900" />
        )}
        {/* Overlay sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Contenu */}
      <div className="relative h-full flex items-center">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-4xl font-medium tracking-tight text-white sm:text-6xl animate-fadeIn">
              Créez le mariage de vos rêves
            </h1>
            <p className="mt-6 text-lg leading-8 text-cream-light animate-fadeIn">
              Découvrez les meilleurs prestataires de mariage haut de gamme et organisez votre événement en toute sérénité.
            </p>
            
            {/* Barre de recherche */}
            <div className="mt-8 animate-fadeIn">
              <SearchBar />
            </div>

            <div className="mt-10 flex items-center justify-center gap-x-6 animate-fadeIn">
              <Button 
                variant="outline" 
                size="lg"
                className="text-gold border-gold hover:bg-gold/10 hover:text-gold"
                onClick={() => navigate('/how-it-works')}
              >
                Comment ça marche
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};