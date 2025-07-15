import { faker } from "@faker-js/faker";
import { FeatureCardModel } from "../components/cards/FeatureCardComponent";


/// This is where we keep the data that will be displayed site wise. 
export const featurePresentation = new FeatureCardModel()
.withThumbnail("assets/AssetNotFound.jpg")
.withFeatureTitle("Site under construction!")
.withUrl("/")
.withFeatureContent(faker.lorem.paragraph())
