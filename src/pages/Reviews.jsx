import React from "react";

const Reviews = () => {
  return (
    <main>
      {/* Section 1 */}
      <div className="fullscreen bg-[#F1F5F8] py-[88px] dark:bg-[#000]">
        <div className="container">
          <div className="wrapper-text flex flex-col gap-[20px] lg:w-[60%]">
            <h1 className="text-[40px] font-[700] leading-[56px]">Отзывы</h1>
            Страница "Отзывы" обычно предназначена для отображения отзывов и
            комментариев пользователей о продукте, услуге или компании. На такой
            странице могут быть размещены отзывы клиентов, рейтинги, комментарии
            и другая информация, которая помогает потенциальным клиентам оценить
            качество продукта или услуги.
          </div>
        </div>
      </div>
    </main>
  );
};

export default Reviews;
