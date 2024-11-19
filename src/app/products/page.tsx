import MaxWidthWrapper from "@/components/global/MaxWidthWrapper";
import Inner from "@/components/layout/Inner";
import { CircleDot, GitCommitVertical } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <Inner>
      <div className="font-serif bg-primary/10 pb-20">
        <MaxWidthWrapper className="">
          <div className="pt-10 grid grid-cols-[40%_60%] h-[30vh] border-b border-primary">
            <h1 className="text-2xl  md:text-4xl lg:text-6xl font-bold uppercase bg-primary/20 flex items-center justify-center p-4 animate-slideinX opacity-0 [--slidein-delay:300ms]">
              Our Products
            </h1>
            <div className="BGProd2"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 border-b border-primary text-sm lg:text-lg py-2 pt-5 animate-slideinY opacity-0 [--slidein-delay:300ms]">
            <span className="flex z-10">Ambroxol</span>
            <span className="z-10">Aspirin</span>
            <span className="z-10">Bronopol</span>
            <span className="z-10">Caffeine Citrate</span>
            <span className="flex z-10">Alluminium Chloride</span>
            <span className="z-10">Cetrimide</span>
            <span className="z-10">Clopidogrel Bi Sulphate</span>
            <span className="z-10">Chlorzoxazone</span>
            <span className="flex z-10">Calcium Glycero Phosphate</span>
            <span className="z-10">Dextromethorphan HBR</span>
            <span className="z-10">Calcium Levulinate</span>
            <span className="z-10">Drotravarine</span>
            <span className="flex z-10">Di-Iodohydroxyquinoline</span>
            <span className="z-10">Calcium D Saccharate</span>
            <span className="z-10">Doxofylline</span>
            <span className="z-10">Sodium Glycero Phosphate</span>
            <span className="flex z-10">E/H Gelatine Capsules</span>
            <span className="z-10">Ferrous Fumarate</span>
            <span className="z-10">Flavoxate HCL</span>
            <span className="z-10">Guaifenesin</span>
            <span className="flex z-10">Potassium Iodide</span>
            <span className="z-10">Iodine</span>
            <span className="z-10">Potassium Iodate</span>
            <span className="z-10">Ketoconazole</span>
            <span className="flex z-10">Lignocaine HCL</span>
            <span className="z-10">Chlorhexidine Gluconate</span>
            <span className="z-10">Menthol</span>
            <span className="z-10">Methyl Cobalamin</span>
            <span className="flex z-10">Benfothiamine</span>
            <span className="z-10">Mometasone Furoate</span>
            <span className="z-10">Ofloxacin</span>
            <span className="z-10">Pantaprazole Sodium</span>
            <span className="flex z-10">Paracetamol</span>
            <span className="z-10">Famotidine</span>
            <span className="z-10">Potassium Chloride</span>
            <span className="z-10">Prednisolone</span>
            <span className="flex z-10">Propyl Gallate</span>
            <span className="z-10">Montelukast Sodium</span>
            <span className="z-10">Rabeprazole Sodium</span>
            <span className="z-10">Resorcinol</span>
            <span className="flex z-10">Salicylic Acid</span>
            <span className="z-10">Sertraline HCL</span>
            <span className="z-10">Silver Sulphadiazine</span>
            <span className="z-10">Sodium Chloride</span>
            <span className="flex z-10">Gentian Violet</span>
            <span className="z-10">Iodoform</span>
            <span className="z-10">Sodium Saccharin</span>
            <span className="z-10">Merbromin</span>
            <span className="flex z-10">Pharma Resins</span>
            <span className="z-10">Surcalfate</span>
            <span className="z-10">Terbinafine HCL</span>
            <span className="z-10">Proflavine Hemisulphate</span>
            <span className="flex z-10">Trimethoprim</span>
            <span className="z-10">Sulphamethaxazole</span>
            <span className="z-10">Sulfasalazine</span>
            <span className="z-10">Formic Acid</span>
            <span className="flex z-10">Metrnidazole Benzoate</span>
            <span className="z-10">Nitazoxanide</span>
            <span className="z-10">Ornidazole</span>
            <span className="z-10">Secnidazole</span>
            <span className="flex z-10">Tinidazole</span>
            <span className="z-10">Ciprofloxacin</span>
            <span className="z-10">Enrofloxacin</span>
            <span className="z-10">Erythromycin &amp; Salts</span>
            <span className="flex z-10">= Roxithromycin</span>
            <span className="z-10">Sparfloxacin</span>
            <span className="z-10">Amoxycillin T/H Comp</span>
            <span className="z-10">Ampicillin T/H</span>
            <span className="flex z-10">Dicloxacillin Sodium</span>
            <span className="z-10">Flucloxacillin Sodium</span>
            <span className="z-10">Amoxycillin Extra Dry</span>
            <span className="z-10">Hyoscine Butyl Bromide</span>
            <span className="flex z-10">Thicolchicoside</span>
            <span className="z-10">Di Ethyl Carbamazine Citrate</span>
            <span className="z-10">Tramadol</span>
            <span className="z-10">Artemether</span>
            <span className="flex z-10">Lumefantrine</span>
            <span className="z-10">Quinine Di-HCL</span>
            <span className="z-10">Quinine Sulphate</span>
            <span className="z-10">Tranexamic Acid</span>
            <span className="flex z-10">Levofloxacin</span>
          </div>
          <div className="border-b border-primary mb-5">
            <h1 className="text-center text-4xl font-bold">Excipients</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 text-sm lg:text-lg mt-5 bg-muted p-2">
              <span className="flex">Aloe Vera</span>
              <span>Cellulose Acetate Phthalate</span>
              <span>Cab-O-Sil</span>
              <span className="flex">Carbopol 934/940</span>
              <span>Calamine</span>
              <span>Citric Acid Anhydrous/Mono</span>
              <span className="flex">Cross Carmellose Sodium</span>
              <span>Di Basic Calcium Phosphate</span>
              <span>EDTA Di-Sodium</span>
              <span className="flex">Eudragit L-100/S 100</span>
              <span>Glycerin</span>
              <span>Guar Gum</span>
              <span className="flex">Gum Accacia</span>
              <span>I.P.A</span>
              <span>Light Kaolin</span>
              <span className="flex">Tri-Choline Cit.</span>
              <span>Talc</span>
              <span>Lactose</span>
              <span className="flex">M.C.C.P (All Grades)</span>
              <span>Methyl Salicylate</span>
              <span>Magnesium Stearate</span>
              <span className="flex">Methylene Chloride</span>
              <span>Methyl Paraben Plain</span>
              <span>Methyl Paraben Sodium</span>
              <span className="flex">Propyl Paraben Plain</span>
              <span>Propyl Paraben Sodium</span>
              <span>Propylene Glycol</span>
              <span className="flex">Sodium Benzoate</span>
              <span>Sodium Starch Glycolate</span>
              <span>Sorbitol</span>
              <span className="flex">Sodium Salicylate</span>
              <span>Starch</span>
              <span>Simethicone Emulsions</span>
            </div>
            <div className="flex justify-center gap-20 bg-muted pt-5 pb-2">
              <div>
                <h1 className="text-2xl font-bold">Emulsifiers</h1>
                <div className="flex flex-col text-sm lg:text-lg mt-2">
                  <span>Carnauba Wax</span>
                  <span>Yellow Soft Paraffin</span>
                  <span>Hard Paraffin Wax</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Natural Oils</h1>
                <div className="flex flex-col text-sm lg:text-lg mt-2">
                  <span>Eucalyptus Oil</span>
                  <span>Dill Oil</span>
                  <span>Carragenan Oil</span>
                  <span>Linseed Oil</span>
                  <span>Anise Oil/ Arachis Oil</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-primary my-20">
            <h1 className="text-center text-4xl font-bold">Therapeutic Use</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 pt-4">
              <div className="grid grid-cols-2 bg-muted border-b border-primary">
                <div className="bg-primary/10 flex flex-col justify-center items-center text-lg">
                  <span>Anti Inflammatory</span>
                </div>
                <div className="flex flex-col p-2">
                  <span>Aceclofenac</span>
                  <span>Diclofenac Sodium</span>
                  <span>Diclofenac Potassium</span>
                  <span>Diclofenac Diethyl Amine</span>
                  <span>Ibuprofen</span>
                  <span>Mefenamic Acid</span>
                  <span>Nimesulide</span>
                </div>
              </div>
              <div className="grid grid-cols-2 bg-muted border-b border-primary">
                <div className="bg-primary/10 flex flex-col justify-center items-center text-lg">
                  <span>Disinfectant Chemicals</span>
                </div>
                <div className="flex flex-col p-2">
                  <span>Aceclofenac</span>
                  <span>Diclofenac Sodium</span>
                  <span>Diclofenac Potassium</span>
                  <span>Diclofenac Diethyl Amine</span>
                  <span>Ibuprofen</span>
                  <span>Mefenamic Acid</span>
                  <span>Nimesulide</span>
                </div>
              </div>
              <div className="grid grid-cols-2 bg-muted border-b border-primary">
                <div className="bg-primary/10 flex flex-col justify-center items-center text-lg">
                  <span>Veterinary & Aqua</span>
                </div>
                <div className="flex flex-col p-2">
                  <span>Aceclofenac</span>
                  <span>Diclofenac Sodium</span>
                  <span>Diclofenac Potassium</span>
                  <span>Diclofenac Diethyl Amine</span>
                  <span>Ibuprofen</span>
                  <span>Mefenamic Acid</span>
                  <span>Nimesulide</span>
                </div>
              </div>
              <div className="grid grid-cols-2 bg-muted text-nowrap border-b border-primary">
                <div className="bg-primary/10 flex flex-col justify-center items-center text-lg">
                  <span>Antihistamine</span>
                </div>
                <div className="flex flex-col p-2">
                  <span>Cinnarizine</span>
                  <span>Cetirizine</span>
                  <span>Diphenhydramine HCL</span>
                  <span>Flunarizine</span>
                  <span>Fexofenadine</span>
                  <span>Loratidine</span>
                  <span>Levocetrizine</span>
                  <span>Promethazine HCL</span>
                </div>
              </div>
              <div className="grid grid-cols-2 bg-muted text-nowrap border-b border-primary">
                <div className="bg-primary/10 flex flex-col justify-center items-center text-lg">
                  <span>Vitamins</span>
                </div>
                <div className="flex flex-col p-2">
                  <span>Calcium D Pantohenate</span>
                  <span>Cynocobalamin</span>
                  <span>Niacinamide</span>
                  <span>Pyridoxine HCL</span>
                  <span>Riboflavin</span>
                  <span>Thiamine HCL</span>
                </div>
              </div>
              <div className="grid grid-cols-2 bg-muted text-nowrap border-b border-primary">
                <div className="bg-primary/10 flex flex-col justify-center items-center text-lg">
                  <span>Anti Diarrhoeals</span>
                </div>
                <div className="flex flex-col p-2">
                  <span>Diloxanide Furoate</span>
                  <span>Metronidazole</span>
                  <span>Metronidazole Benzoate</span>
                  <span>Nitazoxanide</span>
                  <span>Ornidazole</span>
                  <span>Secnidazole</span>
                  <span>Tinidazole</span>
                </div>
              </div>
              <div className="grid grid-cols-2 bg-muted text-nowrap text-sm border-b border-primary">
                <div className="bg-primary/10 flex flex-col justify-center items-center text-lg">
                  <span>Anti Ulcerative Pellets</span>
                </div>
                <div className="flex flex-col p-2 justify-center">
                  <span>Esomeprazole Magnesium 8.5%</span>
                  <span>Lansoprazole 8.5%</span>
                  <span>Omeprazole 7.5%, 8.5%, 10%</span>
                  <span>Pantoprazole 15%</span>
                  <span>Rabeprazole 8.5%</span>
                </div>
              </div>
              <div className="grid grid-cols-2 bg-muted text-nowrap border-b border-primary">
                <div className="bg-primary/10 flex flex-col justify-center items-center text-lg">
                  <span>Steroids</span>
                </div>
                <div className="flex flex-col p-2">
                  <span>Betamethasone Salts</span>
                  <span>Dexamethasone Salts</span>
                  <span>Prednisolone</span>
                  <span>Erythromycin Salts</span>
                </div>
              </div>
              <div className="grid grid-cols-2 bg-muted text-nowrap border-b border-primary">
                <div className="bg-primary/10 flex flex-col justify-center items-center text-lg">
                  <span>AntiBiotic</span>
                </div>
                <div className="flex flex-col p-2">
                  <span>Ciprofloxacin</span>
                  <span>Enrofloxacin</span>
                  <span>Sparfloxacin</span>
                </div>
              </div>
              <div className="grid grid-cols-2 bg-muted">
                <div className="bg-primary/10 flex flex-col justify-center items-center text-lg">
                  <span>Anti-Diabetic</span>
                </div>
                <div className="flex flex-col p-2 justify-center">
                  <span>Gliclazide</span>
                  <span>Glimepiride</span>
                  <span>Metformin HCL</span>
                  <span>Pioglitazone</span>
                </div>
              </div>
              <div className="bg-muted"></div>
              <div className="bg-muted"></div>
            </div>
          </div>
          <div className="border-b border-primary bg-[#5e5b8c]/60">
            <h1 className="text-center text-4xl border-b p-2 bg-[#5e5b8c]/60 rounded-t-lg">
              Imports & Indents
            </h1>
            <ul className="grid grid-cols-1 lg:grid-cols-2 mx-10 my-5 gap-2 text-sm lg:text-lg">
              <li className="flex gap-2">
                <CircleDot fill="#fff" />
                <div className="flex flex-col">
                  Iodine
                  <span className="font-sans font-thin">(SQM EURPOE N.V.)</span>
                </div>
              </li>
              <li className="flex gap-2">
                <CircleDot fill="#fff" />
                <div className="flex flex-col">
                  Doxycycline HCL
                  <span className="font-sans font-thin">
                    (HEBEI JIUPENG PHARMACEUTICAL CO. LTD. )
                  </span>
                </div>
              </li>
              <li className="flex gap-2">
                <CircleDot fill="#fff" />
                <div className="flex flex-col">
                  Norfloxacin
                  <span className="font-sans font-thin">
                    (Henan Kangtai Pharmaceutical Group Corporation)
                  </span>
                </div>
              </li>
              <li className="flex gap-2">
                <CircleDot fill="#fff" />
                <div className="flex flex-col">
                  Azithromycin, Roxithromycin, Ciprofloxacin, Clarithromycin
                  <span className="font-sans font-thin">
                    (Zhejiang Guobang Pharmaceuticals Pvt. Ltd.)
                  </span>
                </div>
              </li>
              <li className="flex gap-2">
                <CircleDot fill="#fff" />
                <div className="flex flex-col">
                  Vitamin E-Liq
                  <span className="font-sans font-thin">
                    (Zhejiang Medicine Co. Ltd.)
                  </span>
                </div>
              </li>
              <li className="flex gap-2">
                <CircleDot fill="#fff" />
                <div className="flex flex-col">
                  Norethistrone, Prednisolone, Mifepristone, Dexamethasone
                  <span className="font-sans font-thin">
                    (Tianjin Tianmao Technology Development Corp. Ltd.)
                  </span>
                </div>
              </li>
              <li className="flex gap-2">
                <CircleDot fill="#fff" />
                <div className="flex flex-col">
                  Levamisole HCL Vet
                  <span className="font-sans font-thin">
                    (Zhejiang Medicine Co. Ltd.)
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </MaxWidthWrapper>
      </div>
    </Inner>
  );
};

export default page;
