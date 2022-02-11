import Image from "next/image";

export default function Profile() {
  return (
    <>
      <div className="px-14 flex flex-col justify-center items-center space-y-2">
        <h1 className="text-xl text-slate-600 font-semibold">Profile</h1>
        <p className="text-base text-slate-400 font-light">
          Mengenai saya secara singkat.
        </p>
      </div>
      <div className="hidden lg:flex flex-row justify-center px-36 py-14">
        <Image
          src="/profile.png"
          width={400}
          height={400}
          alt="Profile"
          className="object-contain object-center"
        />
        <div className="container flex flex-col space-y-6 text-slate-400 px-10 text-justify">
          <p>
            Aliquam blandit leo lorem, nec vehicula mi accumsan posuere. Duis
            condimentum ornare ante a posuere. Aliquam sem magna, sodales quis
            congue vel, congue nec nisi. Aenean nec lorem et dolor aliquet
            ullamcorper eu at sapien. Sed pretium mauris dui. Phasellus mollis
            accumsan tempus. Proin laoreet hendrerit ligula, id lacinia eros.
            Aenean consequat, felis eu malesuada lobortis, augue nisl faucibus
            ligula, id viverra mi erat at nisl. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Maecenas ac aliquet eros.
          </p>
          <p>
            Aliquam a fringilla metus. Fusce ut tortor ut sem sagittis
            convallis. Morbi et augue sed nisl fermentum dictum eget ut nisl.
            Mauris ut dolor posuere augue porta lobortis nec sed lacus.
            Curabitur dignissim ac lorem in tempor. Morbi id dui quis ex
            malesuada mattis. Suspendisse potenti. Nulla euismod diam ut risus
            mollis, id vehicula nulla dictum.
          </p>
        </div>
      </div>
      <div className="flex lg:hidden flex-col justify-center items-center px-12 py-8 space-y-8">
        <Image
          src="/profile.png"
          width={400}
          height={400}
          alt="Profile"
          className="object-contain object-center"
        />
        <div className="text-slate-400 text-sm text-justify space-y-4">
          <p>
            Aliquam blandit leo lorem, nec vehicula mi accumsan posuere. Duis
            condimentum ornare ante a posuere. Aliquam sem magna, sodales quis
            congue vel, congue nec nisi. Aenean nec lorem et dolor aliquet
            ullamcorper eu at sapien. Sed pretium mauris dui. Phasellus mollis
            accumsan tempus. Proin laoreet hendrerit ligula, id lacinia eros.
            Aenean consequat, felis eu malesuada lobortis, augue nisl faucibus
            ligula, id viverra mi erat at nisl. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Maecenas ac aliquet eros.
          </p>
          <p>
            Aliquam a fringilla metus. Fusce ut tortor ut sem sagittis
            convallis. Morbi et augue sed nisl fermentum dictum eget ut nisl.
            Mauris ut dolor posuere augue porta lobortis nec sed lacus.
            Curabitur dignissim ac lorem in tempor. Morbi id dui quis ex
            malesuada mattis. Suspendisse potenti. Nulla euismod diam ut risus
            mollis, id vehicula nulla dictum.
          </p>
        </div>
      </div>
    </>
  );
}
