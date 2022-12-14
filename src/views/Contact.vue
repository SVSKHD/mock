<template>
  <div>
    <Layout>
      <q-card class="my-card">
        <q-parallax
          src="@/assets/images/about.jpeg"
          :height="150"
        />

        <q-card-section>
          <div class="text-h6">Contact Us</div>
        </q-card-section>
      </q-card>
    </Layout>
  </div>
</template>

<script>
import { ref } from "vue";
import Layout from "@/layouts/Layout.vue";

export default {
  components: { Layout },
  setup() {
    const teamData = ref([
      {
        id: 1,
        name: "Istiak Hasan",
        designation: "Web Developer",
        desc: "Hello, I am Grace. I am a full-time Website designer and Graphics designer with many years of experience working for people( business organizations). I have used my skills and knowledge to help organizations and individuals build their website to fit their business brand and expectations. On a personal ground, I have also done project that has helped me gain experience in areas like WordPress, Squarespace, Shopify, Wix, Godaddy, Big-commerce, Woo-commerce, and lots more.",
        facebook: "https://www.facebook.com/istieak",
        linkedin: "https://www.linkedin.com/",
        twitter: "https://www.twiter.com/",
        image: "https://i.ibb.co/wMD5qkJ/istiak.png",
      },
      {
        id: 2,
        name: "Masud Rana Shohagh",
        designation: "Web Developer",
        desc: "Hello, I am Shohagh. I am a full-time Website developer and Front-end Developer. I have used my skills and knowledge to help organizations and individuals build their website to fit their business brand and expectations. On a personal ground.",
        facebook: "https://www.facebook.com/sb.shohagh.0/",
        linkedin: "https://www.linkedin.com/in/masud-rana-shohagh-7a0890227/",
        twitter: "https://twitter.com/sb_shohagh",
        image: "https://i.ibb.co/4VGnmHD/20200904-181025.jpg",
      },
      {
        id: 3,
        name: "Md Arifur Rahman",
        designation: "Web Developer",
        desc: "Hello, I am Arifur Rahman. I am a full-time Website designer and Graphics designer with many years of experience working for people( business organizations). I have used my skills and knowledge to help organizations and individuals build their website to fit their business brand and expectations. On a personal ground, I have also done project that has helped me gain experience in areas like WordPress, Squarespace, Shopify, Wix, Godaddy, Big-commerce, Woo-commerce, and lots more.",
        facebook: "https://www.facebook.com/hridoyr69",
        linkedin: "https://www.linkedin.com/in/arifur-rahman01/",
        twitter: "https://www.twiter.com/",
        image: "https://i.ibb.co/68n1L36/profile.jpg",
      },
      // {id:6,name:"Istiak Hasan",designation:"Web Developer",desc:"Hello, I am Grace. I am a full-time Website designer and Graphics designer with many years of experience working for people( business organizations). I have used my skills and knowledge to help organizations and individuals build their website to fit their business brand and expectations. On a personal ground, I have also done project that has helped me gain experience in areas like WordPress, Squarespace, Shopify, Wix, Godaddy, Big-commerce, Woo-commerce, and lots more.",facebook:"https://www.facebook.com/istieak",linkedin:"https://www.linkedin.com/",twitter:"https://www.twiter.com/",image:"https://i.ibb.co/wMD5qkJ/istiak.png"},
    ]);
    return {
      teamData,
    };
  },
};
</script>