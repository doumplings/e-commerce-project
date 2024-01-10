import { Layout } from "antd";
import { ProductCarousel } from "../../components/carousel/productCarouselAuto";
import Sider from "antd/es/layout/Sider";
import { SiderCollapse } from "../../components/sider/siderCollapse";
import { Content } from "antd/es/layout/layout";
import { ProductGrid } from "../../components/product/productGrid";
import { motion } from "framer-motion";

export const ProductsPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ProductCarousel />
      <Layout>
        <Sider style={{ background: "none", overflow: "auto" }}>
          <SiderCollapse />
        </Sider>
        <Content style={{ overflow: "auto" }}>
          <ProductGrid />
        </Content>
      </Layout>
    </motion.div>
  );
};
