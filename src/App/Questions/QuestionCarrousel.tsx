import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Virtual, Pagination } from "swiper/modules";
import { Questions } from "./Questions";
import { Question } from "./Question";

export const QuestionCarrousel = () => {
  const onSubmit = () => {};

  return (
    <Swiper
      modules={[A11y, Navigation, Virtual, Pagination]}
      slidesPerView={1}
      pagination={{
        type: "fraction",
      }}
      effect={"fade"}
      navigation
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      virtual
    >
      {Questions.map((question, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          <div className="tw-max-w-xl tw-mx-auto tw-h-80">
            <Question data={question} onSubmit={onSubmit} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
