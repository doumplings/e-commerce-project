import { Layout } from "antd";
import { ProductCarousel } from "../../components/carousel/productCarouselAuto";
import Sider from "antd/es/layout/Sider";
import { SiderCollapse } from "../../components/sider/siderCollapse";
import { Content, Footer } from "antd/es/layout/layout";
import { ProductGrid } from "../../components/product/productGrid";
import { motion } from "framer-motion";
import { ResetFilterButton } from "../../components/button/resetFilterButton";

export const ProductsPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ProductCarousel />
      <Layout>
        <Sider
          className="relative"
          style={{ background: "none", overflow: "auto" }}
        >
          <SiderCollapse />
          <div className="ml-8 mt-4">
            <ResetFilterButton />
          </div>
        </Sider>
        <Content style={{ overflow: "auto" }}>
          <ProductGrid />
        </Content>
      </Layout>
      <Footer>Contact Us</Footer>
    </motion.div>
  );
};
