import { logger } from "@vendetta";
import { findByName } from "@vendetta/metro";

export default {
    onLoad: () => {
        findByName("ChatInput").defaultProps.hideGiftButton = true;
    },
    onUnload: () => {
        findByName("ChatInput").defaultProps.hideGiftButton = false;
    },
}