import work from "@/assets/images/work.svg";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Work = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="bg-[#F4F4F4]  text-black flex flex-col justify-center items-center gap-4 p-6 pb-10">
      <h3 className="max-[400px]:text-[30px] font-bold text-[40px] text-[#000000]">
        {t("working_section.working")}
      </h3>
      <p className="md:text-base text-xs">{t("working_section.work_desc")}</p>
      <div className="w-full flex flex-col md:flex-row justify-evenly">
        <div className="flex flex-col md:gap-24 gap-6 py-4 justify-center items-center mt-3 md:mt-12">
          <div className="flex justify-center items-center">
            <Image src={work} alt="" className="md:w-[30rem] w-[24rem]" />
          </div>
        </div>
        <div className="w-full md:w-[45%] grid grid-cols-1 md:grid-cols-2 gap-x-5">
          {/* <div className='max-[400px]:flex-col flex flex-row justify-center items-start md:gap-16 gap-6 md:px-16 px-0'> */}
          {/* <div className="flex flex-col md:mt-32 gap-6 md:pt-[5rem]"> */}
          {/* <div className='flex flex-col md:gap-12 md:mt-32 gap-6'> */}
          <div className="flex flex-col md:gap-4 gap-1 justify-center items-start">
            {/* <Image src={flash} alt="" className="md:w-8 w-8 " /> */}
            <h4 className="font-bold md:text-md text-sm">
              {t("working_section.fast")}
            </h4>
            <p className="md:text-base text-xs">
              {t("working_section.fast_desc")}
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center items-start">
            {/* <Image src={privacy} alt="" className="md:w-8 w-8 " /> */}
            <h4 className="font-bold md:text-md text-sm">
              {t("working_section.privacy")}
            </h4>
            <p className="md:text-base text-xs">
              {t("working_section.privacy_desc")}
            </p>
          </div>
          {/* </div> */}
          {/* <div className="flex flex-col md:gap-12 md:mt-20 gap-6 md:pt-[8rem]"> */}
          <div className="flex flex-col md:gap-4 gap-1 justify-center items-start">
            {/* <Image src={message} alt="" className="md:w-9 w-5" /> */}
            <h4 className="font-bold md:text-md text-sm">
              {t("working_section.report_prob")}
            </h4>
            <p className="md:text-base text-xs">
              {t("working_section.report_prob_desc")}
            </p>
          </div>
          <div className="flex flex-col md:gap-4 gap-1 justify-center items-start">
            {/* <Image src={track} alt="" className="md:w-9 w-5" /> */}
            <h4 className="font-bold md:text-md text-sm">
              {t("working_section.transparency")}
            </h4>
            <p className="md:text-base text-xs">
              {t("working_section.transparency_desc")}
            </p>
          </div>
          {/* </div> */}
          <div className="flex flex-col justify-center items-start gap-4">
            {/* <Image src={people} alt="" className="md:w-8 w-8 " /> */}
            <h4 className="font-bold md:text-md text-sm">
              {t("working_section.community_eng")}
            </h4>
            <p className="w-full md:text-base text-xs">
              {t("working_section.communtiy_eng_desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
