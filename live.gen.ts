// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $$$$0 from "./routes/styles.css.ts";
import * as $$$$1 from "./routes/_app.tsx";
import * as $$$$$0 from "./islands/AddToCartButton.tsx";
import * as $$$$$1 from "./islands/BackToTop.tsx";
import * as $$$$$2 from "./islands/BannerCategory.tsx";
import * as $$$$$3 from "./islands/HeaderButton.tsx";
import * as $$$$$4 from "./islands/HeaderModals.tsx";
import * as $$$$$5 from "./islands/HeaderSearchbar.tsx";
import * as $$$$$6 from "./islands/HeroSection.tsx";
import * as $$$$$7 from "./islands/Newsletter.tsx";
import * as $$$$$8 from "./islands/OutOfStock.tsx";
import * as $$$$$9 from "./islands/ProductImageZoom.tsx";
import * as $$$$$10 from "./islands/SearchControls.tsx";
import * as $$$$$11 from "./islands/ShippingSimulation.tsx";
import * as $$$$$12 from "./islands/SliderJS.tsx";
import * as $$$$$13 from "./islands/WishlistButton.tsx";
import * as $$$$$$$$0 from "./sections/Austral/BannerAustral.tsx";
import * as $$$$$$$$1 from "./sections/Austral/Card.tsx";
import * as $$$$$$$$2 from "./sections/Austral/CardPlusShelf.tsx";
import * as $$$$$$$$3 from "./sections/Austral/CardsCarousel.tsx";
import * as $$$$$$$$4 from "./sections/Austral/Highlights.tsx";
import * as $$$$$$$$5 from "./sections/Austral/Instafeed.tsx";
import * as $$$$$$$$6 from "./sections/Austral/MyAccount.tsx";
import * as $$$$$$$$7 from "./sections/Austral/SeoText.tsx";
import * as $$$$$$$$8 from "./sections/Aviator/AsasParaVoar.tsx";
import * as $$$$$$$$9 from "./sections/Aviator/AsasParaVoarMoreInfo.tsx";
import * as $$$$$$$$10 from "./sections/Aviator/AsasParaVoarPartners.tsx";
import * as $$$$$$$$11 from "./sections/Aviator/AsasParaVoarSubscribe.tsx";
import * as $$$$$$$$12 from "./sections/Aviator/AsasParaVoarTextBlock.tsx";
import * as $$$$$$$$13 from "./sections/Aviator/AsasParaVoarTextWithImage.tsx";
import * as $$$$$$$$14 from "./sections/Aviator/BackToTop.tsx";
import * as $$$$$$$$15 from "./sections/Aviator/BannerAviator.tsx";
import * as $$$$$$$$16 from "./sections/Aviator/BannerCategory.tsx";
import * as $$$$$$$$17 from "./sections/Aviator/BannerContentHorizontal.tsx";
import * as $$$$$$$$18 from "./sections/Aviator/BannerContentMult.tsx";
import * as $$$$$$$$19 from "./sections/Aviator/BannerDobble.tsx";
import * as $$$$$$$$20 from "./sections/Aviator/BannerInstitucional.tsx";
import * as $$$$$$$$21 from "./sections/Aviator/BannerSingle.tsx";
import * as $$$$$$$$22 from "./sections/Aviator/BannerVideo.tsx";
import * as $$$$$$$$23 from "./sections/Aviator/BannerWithCTA.tsx";
import * as $$$$$$$$24 from "./sections/Aviator/CarouselCategoryCardsSection.tsx";
import * as $$$$$$$$25 from "./sections/Aviator/Conditional.tsx";
import * as $$$$$$$$26 from "./sections/Aviator/ContentBlockEditor.tsx";
import * as $$$$$$$$27 from "./sections/Aviator/HeroBanner.tsx";
import * as $$$$$$$$28 from "./sections/Aviator/HeroSection.tsx";
import * as $$$$$$$$29 from "./sections/Aviator/PluginVlibras.tsx";
import * as $$$$$$$$30 from "./sections/Aviator/ProductDetailsSection.tsx";
import * as $$$$$$$$31 from "./sections/Aviator/SearchControls.tsx";
import * as $$$$$$$$32 from "./sections/Aviator/SearchNotFound.tsx";
import * as $$$$$$$$33 from "./sections/Aviator/ZendeskIntegration.tsx";
import * as $$$$$$$$34 from "./sections/Category/CategoryBanner.tsx";
import * as $$$$$$$$35 from "./sections/Category/CategoryList.tsx";
import * as $$$$$$$$36 from "./sections/Content/Benefits.tsx";
import * as $$$$$$$$37 from "./sections/Content/Faq.tsx";
import * as $$$$$$$$38 from "./sections/Content/Logos.tsx";
import * as $$$$$$$$39 from "./sections/Content/Testimonials.tsx";
import * as $$$$$$$$40 from "./sections/DesignSystem/DesignSystem.tsx";
import * as $$$$$$$$41 from "./sections/Footer/Footer.tsx";
import * as $$$$$$$$42 from "./sections/Header/Header.tsx";
import * as $$$$$$$$43 from "./sections/Images/BannerGrid.tsx";
import * as $$$$$$$$44 from "./sections/Images/Carousel.tsx";
import * as $$$$$$$$45 from "./sections/Images/ImageGallery.tsx";
import * as $$$$$$$$46 from "./sections/Images/ShoppableBanner.tsx";
import * as $$$$$$$$47 from "./sections/Links/LinkTree.tsx";
import * as $$$$$$$$48 from "./sections/Links/Shortcuts.tsx";
import * as $$$$$$$$49 from "./sections/Miscellaneous/CampaignTimer.tsx";
import * as $$$$$$$$50 from "./sections/Miscellaneous/CookieConsent.tsx";
import * as $$$$$$$$51 from "./sections/Newsletter/Newsletter.tsx";
import * as $$$$$$$$52 from "./sections/Product/ProductDetails.tsx";
import * as $$$$$$$$53 from "./sections/Product/ProductShelf.tsx";
import * as $$$$$$$$54 from "./sections/Product/SearchResult.tsx";
import * as $$$$$$$$55 from "./sections/Product/Wishlist.tsx";
import * as $$$$$$$$56 from "./sections/Social/InstagramPosts.tsx";
import * as $$$$$$$$57 from "./sections/Social/WhatsApp.tsx";
import * as $live_middleware from "$live/routes/_middleware.ts";
import * as $live_workbench from "$live/routes/live/workbench.ts";
import * as $live_invoke from "$live/routes/live/invoke/index.ts";
import * as $live_invoke_key from "$live/routes/live/invoke/[...key].ts";
import * as $live_editorData from "$live/routes/live/editorData.ts";
import * as $live_inspect from "$live/routes/live/inspect/[...block].ts";
import * as $live_release from "$live/routes/live/release.ts";
import * as $live_meta from "$live/routes/live/_meta.ts";
import * as $live_previews_block from "$live/routes/live/previews/[...block].tsx";
import * as $live_previews_index from "$live/routes/live/previews/index.tsx";
import * as $live_catchall from "$live/routes/[...catchall].tsx";
import * as i2$$$0 from "$live/loaders/state.ts";
import * as i2$$$1 from "$live/loaders/workflows/events.ts";
import * as i2$$$2 from "$live/loaders/workflows/get.ts";
import * as i2$$$$$$0 from "$live/handlers/devPage.ts";
import * as i2$$$$$$1 from "$live/handlers/fresh.ts";
import * as i2$$$$$$2 from "$live/handlers/proxy.ts";
import * as i2$$$$$$3 from "$live/handlers/redirect.ts";
import * as i2$$$$$$4 from "$live/handlers/router.ts";
import * as i2$$$$$$5 from "$live/handlers/routesSelection.ts";
import * as i2$$$$$$6 from "$live/handlers/workflowRunner.ts";
import * as i2$$$$$$$0 from "$live/pages/LivePage.tsx";
import * as i2$$$$0 from "$live/sections/PageInclude.tsx";
import * as i2$$$$1 from "$live/sections/Slot.tsx";
import * as i2$$$$2 from "$live/sections/UseSlot.tsx";
import * as i2$$$$$$$$0 from "$live/matchers/MatchAlways.ts";
import * as i2$$$$$$$$1 from "$live/matchers/MatchDate.ts";
import * as i2$$$$$$$$2 from "$live/matchers/MatchDevice.ts";
import * as i2$$$$$$$$3 from "$live/matchers/MatchEnvironment.ts";
import * as i2$$$$$$$$4 from "$live/matchers/MatchHost.ts";
import * as i2$$$$$$$$5 from "$live/matchers/MatchMulti.ts";
import * as i2$$$$$$$$6 from "$live/matchers/MatchRandom.ts";
import * as i2$$$$$$$$7 from "$live/matchers/MatchSite.ts";
import * as i2$$$$$$$$8 from "$live/matchers/MatchUserAgent.ts";
import * as i2$$$$$$$$$0 from "$live/flags/audience.ts";
import * as i2$$$$$$$$$1 from "$live/flags/everyone.ts";
import * as i2$$$$$0 from "$live/actions/workflows/cancel.ts";
import * as i2$$$$$1 from "$live/actions/workflows/run.ts";
import * as i2$$$$$2 from "$live/actions/workflows/signal.ts";
import * as i2$$$$$3 from "$live/actions/workflows/start.ts";
import * as i2$0 from "deco-sites/std/functions/butterCMSAds.ts";
import * as i2$1 from "deco-sites/std/functions/butterCMSBrands.ts";
import * as i2$2 from "deco-sites/std/functions/butterCMSCategories.ts";
import * as i2$3 from "deco-sites/std/functions/butterCMSFeaturedPosts.ts";
import * as i2$4 from "deco-sites/std/functions/butterCMSPage.ts";
import * as i2$5 from "deco-sites/std/functions/butterCMSPlaces.ts";
import * as i2$6 from "deco-sites/std/functions/butterCMSPostDetail.ts";
import * as i2$7 from "deco-sites/std/functions/butterCMSPosts.ts";
import * as i2$8 from "deco-sites/std/functions/butterCMSRelatedPosts.ts";
import * as i2$9 from "deco-sites/std/functions/occProductDetailsPage.ts";
import * as i2$10 from "deco-sites/std/functions/requestToParam.ts";
import * as i2$11 from "deco-sites/std/functions/shopifyProductDetailsPage.ts";
import * as i2$12 from "deco-sites/std/functions/shopifyProductList.ts";
import * as i2$13 from "deco-sites/std/functions/shopifyProductListingPage.ts";
import * as i2$14 from "deco-sites/std/functions/vndaProductDetailsPage.ts";
import * as i2$15 from "deco-sites/std/functions/vndaProductList.ts";
import * as i2$16 from "deco-sites/std/functions/vndaProductListingPage.ts";
import * as i2$17 from "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts";
import * as i2$18 from "deco-sites/std/functions/vtexLegacyProductList.ts";
import * as i2$19 from "deco-sites/std/functions/vtexLegacyProductListingPage.ts";
import * as i2$20 from "deco-sites/std/functions/vtexLegacyRelatedProductsLoader.ts";
import * as i2$21 from "deco-sites/std/functions/vtexNavbar.ts";
import * as i2$22 from "deco-sites/std/functions/vtexProductDetailsPage.ts";
import * as i2$23 from "deco-sites/std/functions/vtexProductList.ts";
import * as i2$24 from "deco-sites/std/functions/vtexProductListingPage.ts";
import * as i2$25 from "deco-sites/std/functions/vtexSuggestions.ts";
import * as i2$26 from "deco-sites/std/functions/vtexWishlist.ts";
import * as i2$$0 from "deco-sites/std/accounts/occ.ts";
import * as i2$$1 from "deco-sites/std/accounts/shopify.ts";
import * as i2$$2 from "deco-sites/std/accounts/vnda.ts";
import * as i2$$3 from "deco-sites/std/accounts/vtex.ts";
import * as i2$$4 from "deco-sites/std/accounts/yourViews.ts";
import * as i2$$$3 from "deco-sites/std/loaders/vtex/cart.ts";
import * as i2$$$4 from "deco-sites/std/loaders/vtex/intelligentSearch/productDetailsPage.ts";
import * as i2$$$5 from "deco-sites/std/loaders/vtex/intelligentSearch/productList.ts";
import * as i2$$$6 from "deco-sites/std/loaders/vtex/intelligentSearch/productListingPage.ts";
import * as i2$$$7 from "deco-sites/std/loaders/vtex/intelligentSearch/suggestions.ts";
import * as i2$$$8 from "deco-sites/std/loaders/vtex/legacy/productDetailsPage.ts";
import * as i2$$$9 from "deco-sites/std/loaders/vtex/legacy/productList.ts";
import * as i2$$$10 from "deco-sites/std/loaders/vtex/legacy/productListingPage.ts";
import * as i2$$$11 from "deco-sites/std/loaders/vtex/legacy/relatedProductsLoader.ts";
import * as i2$$$12 from "deco-sites/std/loaders/vtex/navbar.ts";
import * as i2$$$13 from "deco-sites/std/loaders/vtex/proxy.ts";
import * as i2$$$14 from "deco-sites/std/loaders/vtex/user.ts";
import * as i2$$$15 from "deco-sites/std/loaders/vtex/wishlist.ts";
import * as i2$$$$3 from "deco-sites/std/sections/Analytics.tsx";
import * as i2$$$$4 from "deco-sites/std/sections/configButterCMS.global.tsx";
import * as i2$$$$5 from "deco-sites/std/sections/configOCC.global.tsx";
import * as i2$$$$6 from "deco-sites/std/sections/configShopify.global.tsx";
import * as i2$$$$7 from "deco-sites/std/sections/configVNDA.global.tsx";
import * as i2$$$$8 from "deco-sites/std/sections/configVTEX.global.tsx";
import * as i2$$$$9 from "deco-sites/std/sections/configYourViews.global.tsx";
import * as i2$$$$10 from "deco-sites/std/sections/SEO.tsx";
import * as i2$$$$11 from "deco-sites/std/sections/SEOPDP.tsx";
import * as i2$$$$12 from "deco-sites/std/sections/SEOPLP.tsx";
import * as i2$$$$13 from "deco-sites/std/sections/VTEXPortalDataLayerCompatibility.tsx";
import * as i2$$$$$4 from "deco-sites/std/actions/vtex/cart/addItems.ts";
import * as i2$$$$$5 from "deco-sites/std/actions/vtex/cart/getInstallment.ts";
import * as i2$$$$$6 from "deco-sites/std/actions/vtex/cart/removeItemAttachment.ts";
import * as i2$$$$$7 from "deco-sites/std/actions/vtex/cart/removeItems.ts";
import * as i2$$$$$8 from "deco-sites/std/actions/vtex/cart/simulation.ts";
import * as i2$$$$$9 from "deco-sites/std/actions/vtex/cart/updateAttachment.ts";
import * as i2$$$$$10 from "deco-sites/std/actions/vtex/cart/updateCoupons.ts";
import * as i2$$$$$11 from "deco-sites/std/actions/vtex/cart/updateItemAttachment.ts";
import * as i2$$$$$12 from "deco-sites/std/actions/vtex/cart/updateItemPrice.ts";
import * as i2$$$$$13 from "deco-sites/std/actions/vtex/cart/updateItems.ts";
import * as i2$$$$$14 from "deco-sites/std/actions/vtex/cart/updateProfile.ts";
import * as i2$$$$$15 from "deco-sites/std/actions/vtex/cart/updateUser.ts";
import * as i2$$$$$16 from "deco-sites/std/actions/vtex/newsletter/subscribe.ts";
import * as i2$$$$$17 from "deco-sites/std/actions/vtex/notifyme.ts";
import * as i2$$$$$18 from "deco-sites/std/actions/vtex/wishlist/addItem.ts";
import * as i2$$$$$19 from "deco-sites/std/actions/vtex/wishlist/removeItem.ts";

const manifest = {
  "routes": {
    "./routes/_app.tsx": $$$$1,
    "./routes/_middleware.ts": $live_middleware,
    "./routes/[...catchall].tsx": $live_catchall,
    "./routes/index.tsx": $live_catchall,
    "./routes/live/_meta.ts": $live_meta,
    "./routes/live/editorData.ts": $live_editorData,
    "./routes/live/inspect/[...block].ts": $live_inspect,
    "./routes/live/invoke/[...key].ts": $live_invoke_key,
    "./routes/live/invoke/index.ts": $live_invoke,
    "./routes/live/previews/[...block].tsx": $live_previews_block,
    "./routes/live/previews/index.tsx": $live_previews_index,
    "./routes/live/release.ts": $live_release,
    "./routes/live/workbench.ts": $live_workbench,
    "./routes/styles.css.ts": $$$$0,
  },
  "islands": {
    "./islands/AddToCartButton.tsx": $$$$$0,
    "./islands/BackToTop.tsx": $$$$$1,
    "./islands/BannerCategory.tsx": $$$$$2,
    "./islands/HeaderButton.tsx": $$$$$3,
    "./islands/HeaderModals.tsx": $$$$$4,
    "./islands/HeaderSearchbar.tsx": $$$$$5,
    "./islands/HeroSection.tsx": $$$$$6,
    "./islands/Newsletter.tsx": $$$$$7,
    "./islands/OutOfStock.tsx": $$$$$8,
    "./islands/ProductImageZoom.tsx": $$$$$9,
    "./islands/SearchControls.tsx": $$$$$10,
    "./islands/ShippingSimulation.tsx": $$$$$11,
    "./islands/SliderJS.tsx": $$$$$12,
    "./islands/WishlistButton.tsx": $$$$$13,
  },
  "sections": {
    "$live/sections/PageInclude.tsx": i2$$$$0,
    "$live/sections/Slot.tsx": i2$$$$1,
    "$live/sections/UseSlot.tsx": i2$$$$2,
    "deco-sites/std/sections/Analytics.tsx": i2$$$$3,
    "deco-sites/std/sections/configButterCMS.global.tsx": i2$$$$4,
    "deco-sites/std/sections/configOCC.global.tsx": i2$$$$5,
    "deco-sites/std/sections/configShopify.global.tsx": i2$$$$6,
    "deco-sites/std/sections/configVNDA.global.tsx": i2$$$$7,
    "deco-sites/std/sections/configVTEX.global.tsx": i2$$$$8,
    "deco-sites/std/sections/configYourViews.global.tsx": i2$$$$9,
    "deco-sites/std/sections/SEO.tsx": i2$$$$10,
    "deco-sites/std/sections/SEOPDP.tsx": i2$$$$11,
    "deco-sites/std/sections/SEOPLP.tsx": i2$$$$12,
    "deco-sites/std/sections/VTEXPortalDataLayerCompatibility.tsx": i2$$$$13,
    "deco-sites/suzteclibrary/sections/Austral/BannerAustral.tsx": $$$$$$$$0,
    "deco-sites/suzteclibrary/sections/Austral/Card.tsx": $$$$$$$$1,
    "deco-sites/suzteclibrary/sections/Austral/CardPlusShelf.tsx": $$$$$$$$2,
    "deco-sites/suzteclibrary/sections/Austral/CardsCarousel.tsx": $$$$$$$$3,
    "deco-sites/suzteclibrary/sections/Austral/Highlights.tsx": $$$$$$$$4,
    "deco-sites/suzteclibrary/sections/Austral/Instafeed.tsx": $$$$$$$$5,
    "deco-sites/suzteclibrary/sections/Austral/MyAccount.tsx": $$$$$$$$6,
    "deco-sites/suzteclibrary/sections/Austral/SeoText.tsx": $$$$$$$$7,
    "deco-sites/suzteclibrary/sections/Aviator/AsasParaVoar.tsx": $$$$$$$$8,
    "deco-sites/suzteclibrary/sections/Aviator/AsasParaVoarMoreInfo.tsx":
      $$$$$$$$9,
    "deco-sites/suzteclibrary/sections/Aviator/AsasParaVoarPartners.tsx":
      $$$$$$$$10,
    "deco-sites/suzteclibrary/sections/Aviator/AsasParaVoarSubscribe.tsx":
      $$$$$$$$11,
    "deco-sites/suzteclibrary/sections/Aviator/AsasParaVoarTextBlock.tsx":
      $$$$$$$$12,
    "deco-sites/suzteclibrary/sections/Aviator/AsasParaVoarTextWithImage.tsx":
      $$$$$$$$13,
    "deco-sites/suzteclibrary/sections/Aviator/BackToTop.tsx": $$$$$$$$14,
    "deco-sites/suzteclibrary/sections/Aviator/BannerAviator.tsx": $$$$$$$$15,
    "deco-sites/suzteclibrary/sections/Aviator/BannerCategory.tsx": $$$$$$$$16,
    "deco-sites/suzteclibrary/sections/Aviator/BannerContentHorizontal.tsx":
      $$$$$$$$17,
    "deco-sites/suzteclibrary/sections/Aviator/BannerContentMult.tsx":
      $$$$$$$$18,
    "deco-sites/suzteclibrary/sections/Aviator/BannerDobble.tsx": $$$$$$$$19,
    "deco-sites/suzteclibrary/sections/Aviator/BannerInstitucional.tsx":
      $$$$$$$$20,
    "deco-sites/suzteclibrary/sections/Aviator/BannerSingle.tsx": $$$$$$$$21,
    "deco-sites/suzteclibrary/sections/Aviator/BannerVideo.tsx": $$$$$$$$22,
    "deco-sites/suzteclibrary/sections/Aviator/BannerWithCTA.tsx": $$$$$$$$23,
    "deco-sites/suzteclibrary/sections/Aviator/CarouselCategoryCardsSection.tsx":
      $$$$$$$$24,
    "deco-sites/suzteclibrary/sections/Aviator/Conditional.tsx": $$$$$$$$25,
    "deco-sites/suzteclibrary/sections/Aviator/ContentBlockEditor.tsx":
      $$$$$$$$26,
    "deco-sites/suzteclibrary/sections/Aviator/HeroBanner.tsx": $$$$$$$$27,
    "deco-sites/suzteclibrary/sections/Aviator/HeroSection.tsx": $$$$$$$$28,
    "deco-sites/suzteclibrary/sections/Aviator/PluginVlibras.tsx": $$$$$$$$29,
    "deco-sites/suzteclibrary/sections/Aviator/ProductDetailsSection.tsx":
      $$$$$$$$30,
    "deco-sites/suzteclibrary/sections/Aviator/SearchControls.tsx": $$$$$$$$31,
    "deco-sites/suzteclibrary/sections/Aviator/SearchNotFound.tsx": $$$$$$$$32,
    "deco-sites/suzteclibrary/sections/Aviator/ZendeskIntegration.tsx":
      $$$$$$$$33,
    "deco-sites/suzteclibrary/sections/Category/CategoryBanner.tsx": $$$$$$$$34,
    "deco-sites/suzteclibrary/sections/Category/CategoryList.tsx": $$$$$$$$35,
    "deco-sites/suzteclibrary/sections/Content/Benefits.tsx": $$$$$$$$36,
    "deco-sites/suzteclibrary/sections/Content/Faq.tsx": $$$$$$$$37,
    "deco-sites/suzteclibrary/sections/Content/Logos.tsx": $$$$$$$$38,
    "deco-sites/suzteclibrary/sections/Content/Testimonials.tsx": $$$$$$$$39,
    "deco-sites/suzteclibrary/sections/DesignSystem/DesignSystem.tsx":
      $$$$$$$$40,
    "deco-sites/suzteclibrary/sections/Footer/Footer.tsx": $$$$$$$$41,
    "deco-sites/suzteclibrary/sections/Header/Header.tsx": $$$$$$$$42,
    "deco-sites/suzteclibrary/sections/Images/BannerGrid.tsx": $$$$$$$$43,
    "deco-sites/suzteclibrary/sections/Images/Carousel.tsx": $$$$$$$$44,
    "deco-sites/suzteclibrary/sections/Images/ImageGallery.tsx": $$$$$$$$45,
    "deco-sites/suzteclibrary/sections/Images/ShoppableBanner.tsx": $$$$$$$$46,
    "deco-sites/suzteclibrary/sections/Links/LinkTree.tsx": $$$$$$$$47,
    "deco-sites/suzteclibrary/sections/Links/Shortcuts.tsx": $$$$$$$$48,
    "deco-sites/suzteclibrary/sections/Miscellaneous/CampaignTimer.tsx":
      $$$$$$$$49,
    "deco-sites/suzteclibrary/sections/Miscellaneous/CookieConsent.tsx":
      $$$$$$$$50,
    "deco-sites/suzteclibrary/sections/Newsletter/Newsletter.tsx": $$$$$$$$51,
    "deco-sites/suzteclibrary/sections/Product/ProductDetails.tsx": $$$$$$$$52,
    "deco-sites/suzteclibrary/sections/Product/ProductShelf.tsx": $$$$$$$$53,
    "deco-sites/suzteclibrary/sections/Product/SearchResult.tsx": $$$$$$$$54,
    "deco-sites/suzteclibrary/sections/Product/Wishlist.tsx": $$$$$$$$55,
    "deco-sites/suzteclibrary/sections/Social/InstagramPosts.tsx": $$$$$$$$56,
    "deco-sites/suzteclibrary/sections/Social/WhatsApp.tsx": $$$$$$$$57,
  },
  "loaders": {
    "$live/loaders/state.ts": i2$$$0,
    "$live/loaders/workflows/events.ts": i2$$$1,
    "$live/loaders/workflows/get.ts": i2$$$2,
    "deco-sites/std/loaders/vtex/cart.ts": i2$$$3,
    "deco-sites/std/loaders/vtex/intelligentSearch/productDetailsPage.ts":
      i2$$$4,
    "deco-sites/std/loaders/vtex/intelligentSearch/productList.ts": i2$$$5,
    "deco-sites/std/loaders/vtex/intelligentSearch/productListingPage.ts":
      i2$$$6,
    "deco-sites/std/loaders/vtex/intelligentSearch/suggestions.ts": i2$$$7,
    "deco-sites/std/loaders/vtex/legacy/productDetailsPage.ts": i2$$$8,
    "deco-sites/std/loaders/vtex/legacy/productList.ts": i2$$$9,
    "deco-sites/std/loaders/vtex/legacy/productListingPage.ts": i2$$$10,
    "deco-sites/std/loaders/vtex/legacy/relatedProductsLoader.ts": i2$$$11,
    "deco-sites/std/loaders/vtex/navbar.ts": i2$$$12,
    "deco-sites/std/loaders/vtex/proxy.ts": i2$$$13,
    "deco-sites/std/loaders/vtex/user.ts": i2$$$14,
    "deco-sites/std/loaders/vtex/wishlist.ts": i2$$$15,
  },
  "handlers": {
    "$live/handlers/devPage.ts": i2$$$$$$0,
    "$live/handlers/fresh.ts": i2$$$$$$1,
    "$live/handlers/proxy.ts": i2$$$$$$2,
    "$live/handlers/redirect.ts": i2$$$$$$3,
    "$live/handlers/router.ts": i2$$$$$$4,
    "$live/handlers/routesSelection.ts": i2$$$$$$5,
    "$live/handlers/workflowRunner.ts": i2$$$$$$6,
  },
  "pages": {
    "$live/pages/LivePage.tsx": i2$$$$$$$0,
  },
  "matchers": {
    "$live/matchers/MatchAlways.ts": i2$$$$$$$$0,
    "$live/matchers/MatchDate.ts": i2$$$$$$$$1,
    "$live/matchers/MatchDevice.ts": i2$$$$$$$$2,
    "$live/matchers/MatchEnvironment.ts": i2$$$$$$$$3,
    "$live/matchers/MatchHost.ts": i2$$$$$$$$4,
    "$live/matchers/MatchMulti.ts": i2$$$$$$$$5,
    "$live/matchers/MatchRandom.ts": i2$$$$$$$$6,
    "$live/matchers/MatchSite.ts": i2$$$$$$$$7,
    "$live/matchers/MatchUserAgent.ts": i2$$$$$$$$8,
  },
  "flags": {
    "$live/flags/audience.ts": i2$$$$$$$$$0,
    "$live/flags/everyone.ts": i2$$$$$$$$$1,
  },
  "actions": {
    "$live/actions/workflows/cancel.ts": i2$$$$$0,
    "$live/actions/workflows/run.ts": i2$$$$$1,
    "$live/actions/workflows/signal.ts": i2$$$$$2,
    "$live/actions/workflows/start.ts": i2$$$$$3,
    "deco-sites/std/actions/vtex/cart/addItems.ts": i2$$$$$4,
    "deco-sites/std/actions/vtex/cart/getInstallment.ts": i2$$$$$5,
    "deco-sites/std/actions/vtex/cart/removeItemAttachment.ts": i2$$$$$6,
    "deco-sites/std/actions/vtex/cart/removeItems.ts": i2$$$$$7,
    "deco-sites/std/actions/vtex/cart/simulation.ts": i2$$$$$8,
    "deco-sites/std/actions/vtex/cart/updateAttachment.ts": i2$$$$$9,
    "deco-sites/std/actions/vtex/cart/updateCoupons.ts": i2$$$$$10,
    "deco-sites/std/actions/vtex/cart/updateItemAttachment.ts": i2$$$$$11,
    "deco-sites/std/actions/vtex/cart/updateItemPrice.ts": i2$$$$$12,
    "deco-sites/std/actions/vtex/cart/updateItems.ts": i2$$$$$13,
    "deco-sites/std/actions/vtex/cart/updateProfile.ts": i2$$$$$14,
    "deco-sites/std/actions/vtex/cart/updateUser.ts": i2$$$$$15,
    "deco-sites/std/actions/vtex/newsletter/subscribe.ts": i2$$$$$16,
    "deco-sites/std/actions/vtex/notifyme.ts": i2$$$$$17,
    "deco-sites/std/actions/vtex/wishlist/addItem.ts": i2$$$$$18,
    "deco-sites/std/actions/vtex/wishlist/removeItem.ts": i2$$$$$19,
  },
  "functions": {
    "deco-sites/std/functions/butterCMSAds.ts": i2$0,
    "deco-sites/std/functions/butterCMSBrands.ts": i2$1,
    "deco-sites/std/functions/butterCMSCategories.ts": i2$2,
    "deco-sites/std/functions/butterCMSFeaturedPosts.ts": i2$3,
    "deco-sites/std/functions/butterCMSPage.ts": i2$4,
    "deco-sites/std/functions/butterCMSPlaces.ts": i2$5,
    "deco-sites/std/functions/butterCMSPostDetail.ts": i2$6,
    "deco-sites/std/functions/butterCMSPosts.ts": i2$7,
    "deco-sites/std/functions/butterCMSRelatedPosts.ts": i2$8,
    "deco-sites/std/functions/occProductDetailsPage.ts": i2$9,
    "deco-sites/std/functions/requestToParam.ts": i2$10,
    "deco-sites/std/functions/shopifyProductDetailsPage.ts": i2$11,
    "deco-sites/std/functions/shopifyProductList.ts": i2$12,
    "deco-sites/std/functions/shopifyProductListingPage.ts": i2$13,
    "deco-sites/std/functions/vndaProductDetailsPage.ts": i2$14,
    "deco-sites/std/functions/vndaProductList.ts": i2$15,
    "deco-sites/std/functions/vndaProductListingPage.ts": i2$16,
    "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts": i2$17,
    "deco-sites/std/functions/vtexLegacyProductList.ts": i2$18,
    "deco-sites/std/functions/vtexLegacyProductListingPage.ts": i2$19,
    "deco-sites/std/functions/vtexLegacyRelatedProductsLoader.ts": i2$20,
    "deco-sites/std/functions/vtexNavbar.ts": i2$21,
    "deco-sites/std/functions/vtexProductDetailsPage.ts": i2$22,
    "deco-sites/std/functions/vtexProductList.ts": i2$23,
    "deco-sites/std/functions/vtexProductListingPage.ts": i2$24,
    "deco-sites/std/functions/vtexSuggestions.ts": i2$25,
    "deco-sites/std/functions/vtexWishlist.ts": i2$26,
  },
  "accounts": {
    "deco-sites/std/accounts/occ.ts": i2$$0,
    "deco-sites/std/accounts/shopify.ts": i2$$1,
    "deco-sites/std/accounts/vnda.ts": i2$$2,
    "deco-sites/std/accounts/vtex.ts": i2$$3,
    "deco-sites/std/accounts/yourViews.ts": i2$$4,
  },
  "config": config,
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest satisfies DecoManifest;
