// noinspection JSUnresolvedFunction

import objectPath from "object-path";
import {config} from "@/layouts/default-layout/config/helper";
import {useBodyStore} from "@/stores/body";

class LayoutService {
    /**
     * @description initialize default layout
     */
    static init() {
        this.bodyStore = useBodyStore();

        //empty body element classes and attributes
        LayoutService.emptyElementClassesAndAttributes(document.body);

        LayoutService.initLayout();
        LayoutService.initHeader();
        LayoutService.initAside();
        LayoutService.initFooter();
    }

    /**
     * @description init layout
     */
    static initLayout() {
        this.bodyStore.addBodyAttribute({
            qualifiedName: "id",
            value: "kt_body",
        });
    }

    /**
     * @description init header
     */
    static initHeader() {
        if (objectPath.get(config.value, "header.fixed.desktop")) this.bodyStore.addBodyClassname("header-fixed");
        if (objectPath.get(config.value, "header.fixed.tabletAndMobile")) this.bodyStore.addBodyClassname("header-tablet-and-mobile-fixed");
    }

    /**
     * @description init aside
     */
    static initAside() {
        if (!objectPath.get(config.value, "aside.display")) return;

        // Enable Aside
        this.bodyStore.addBodyClassname("aside-enabled");

        // Minimized
        if (
            objectPath.get(config.value, "aside.minimized") &&
            objectPath.get(config.value, "aside.toggle")
        ) {
            this.bodyStore.addBodyAttribute({
                qualifiedName: "data-kt-aside-minimize",
                value: "on",
            });
        }

        if (objectPath.get(config.value, "aside.fixed")) {
            // Fixed Aside
            this.bodyStore.addBodyClassname("aside-fixed");
        }

        if (objectPath.get(config.value, "aside.secondaryDisplay")) {
            // Aside Secondary Enabled
            this.bodyStore.addBodyClassname("aside-secondary-enabled");
        }

        // Default minimized
        if (objectPath.get(config.value, "aside.minimized")) {
            this.bodyStore.addBodyAttribute({
                qualifiedName: "data-kt-aside-minimize",
                value: "on",
            });
        }
    }

    /**
     * @description init footer
     */
    static initFooter() {
        // Fixed header
        if (objectPath.get(config.value, "footer.width") === "fixed") this.bodyStore.addBodyClassname("footer-fixed");
    }

    static emptyElementClassesAndAttributes(element) {
        element.className = "";
        for (let i = element.attributes.length; i-- > 0;) element.removeAttributeNode(element.attributes[i]);
    }
}

export default LayoutService;
