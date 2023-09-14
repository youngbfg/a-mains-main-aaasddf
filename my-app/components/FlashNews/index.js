"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";

import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import moment from "moment";
import "moment/locale/tr";

// export default async function FlashNews({ title, body, id })
export default async function FlashNews({ id }) {
  return (
    <div>
      <Link href={`/${id}`} className={styles.card}>
        <div className={styles.cardImage}>
          <Image
            //src={`https://picsum.photos/200/300?random=${id}`}
            src={`/TUZLAA.jpg`}
            alt="/"
            fill
          
           
          />
        </div>
        <div className={styles.cardBody}>
          <h3 className={styles.title}>
            {/* {title} */}
            
            Tuzla’da Ulaşıma Altın Dokunuş
            
          </h3>
          <div className={styles.time}>{moment(id).format("LLL")}</div>
          <div className={styles.body}>
            {/* {body} */}
            <p>
            İBB Ulaşım Koordinasyon Şube Müdürlüğünce hazırlanan proje kapsamında uzun araç trafiğine sebebiyet veren dönel ada kaldırılarak yerine sinyalize kavşak oluşturuldu. Ayrıca kavşak üzerinde açılan serbest dönüş kolları ile araç trafiğinin daha hızlı ve güvenli şekilde akması sağlandı
            </p>

            </div>
          <button className={styles.buttons}>Daha fazla Oku</button>
          
        </div>
      </Link>
    </div>
  );
}