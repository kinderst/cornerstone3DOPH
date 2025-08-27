import { utilities } from "@qtimoph/tools";
import {
    generateRTSSFromAnnotations,
    generateRTSSFromSegmentations
} from "./RTSS";

const { generateContourSetsFromLabelmap } = utilities.contours;

export {
    generateContourSetsFromLabelmap,
    generateRTSSFromAnnotations,
    generateRTSSFromSegmentations
};
