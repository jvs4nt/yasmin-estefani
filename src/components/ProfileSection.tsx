import profilePhoto from "@/assets/perfil.jpeg";

const ProfileSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="flex flex-col items-center space-y-8 max-w-2xl mx-auto text-center">
        <div className="relative">
          <img
            src={profilePhoto}
            alt="Foto de perfil"
            className="w-40 h-40 md:w-40 md:h-40 rounded-full object-cover border-4 border-border shadow-lg"
          />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-8xl font-bold text-foreground tracking-tight">
            Yasmin Estefani
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Meu portifólio de estudos e projetos
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;