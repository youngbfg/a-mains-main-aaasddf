"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";
import styles from "./styles.module.css";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import {
  IoIosArrowBack
} from "react-icons/io";
import "moment/locale/tr";
import Link from 'next/link'

async function getPost(id) {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}

async function Page(params) {
  const { id, title, body, userId } = await getPost(params.id);
  if (!title) {
    return notFound();
  }
}

export default function Pages({ id, userId }) {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.feed}>
        <Link href={`/`}>
          <IoIosArrowBack color="#003c84"/>
          <font color="#003c84">Haberler</font>
        </Link>
      
      </div>
      <div className={styles.cardImage}>
        <Image
          // src={`https://picsum.photos/960/400?random=${id}`}
          src={`/TUZLAA.jpg`}
          alt="/"
          fill
        />
      </div>
      <div className={styles.smallImage}>
        <img
          alt="/"
          className={styles.smallImage}
          // src={`https://picsum.photos/960/400?random=${id}`}
          src={`/basin-materyalleri-ibb-logo.jpg`}
        />
        <div className={styles.text}>
          {/* userId:{userId} */}
          İstanbul Büyükşehir Belediyesi
        </div>
        <div className={styles.texts}>8 Mayıs 2023 / İstanbul </div>
      </div>

      <div className={styles.title}>
        {/* {title} */}
        <p>Tuzla’da Ulaşıma Altın Dokunuş</p>
      </div>
      <div className={styles.titles}>
        {/* {body} */}
        <p>
          İBB Ulaşım Koordinasyon Şube Müdürlüğünce hazırlanan proje kapsamında
          uzun araç trafiğine sebebiyet veren dönel ada kaldırılarak yerine
          sinyalize kavşak oluşturuldu. Ayrıca kavşak üzerinde açılan serbest
          dönüş kolları ile araç trafiğinin daha hızlı ve güvenli şekilde akması
          sağlandı.
        </p>
        <br />
        <p>
          Gürpınar, Aydınlı Yolu ve Cemil Erdöl gibi yoğun kullanılan bu
          caddeleri birbirine bağlayan kavşak projesi ile bölge geçişlerinde
          araçlara 5 dakikalık zaman tasarrufu sağlanmış oldu. Bu zaman
          tasarrufu araçların tükettikleri yakıt miktarını 2400 litre
          azaltıldığı gibi karbon salınımını da 0,4 ton aşağı çekti.
        </p>
      </div>

      <div className={styles.iconas}>
        <FacebookShareButton url={`http://10.1.245.102:3000/${id}`}>
          <AiFillFacebook />
        </FacebookShareButton>
        <TwitterShareButton url={`http://192.168.68.111:3000/${id}`}>
          <AiFillTwitterCircle />
        </TwitterShareButton>
        <LinkedinShareButton url={`http://192.168.68.111:3000/${id}`}>
          <AiFillLinkedin />
        </LinkedinShareButton>
        <WhatsappShareButton url={`http://192.168.68.111:3000/${id}`}>
          <AiOutlineWhatsApp />
        </WhatsappShareButton>
      </div>
      <div className={styles.icona}>
        <FacebookShareButton url={`http://10.1.245.102:3000/${id}`}>
          <AiFillFacebook />
        </FacebookShareButton>
        <TwitterShareButton url={`http://192.168.68.111:3000/${id}`}>
          <AiFillTwitterCircle />
        </TwitterShareButton>
        <LinkedinShareButton url={`http://192.168.68.111:3000/${id}`}>
          <AiFillLinkedin />
        </LinkedinShareButton>
        <WhatsappShareButton url={`http://192.168.68.111:3000/${id}`}>
          <AiOutlineWhatsApp />
        </WhatsappShareButton>
      </div>
    </div>
  );
}
