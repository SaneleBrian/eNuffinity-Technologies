import type { SVGProps } from "react";

// Ionicons SVG source, bundled at build time via Vite's `?raw` import (no
// runtime fetch, no extra framework dependency).
import menuOutline from "@/assets/icons/menu-outline.svg?raw";
import closeOutline from "@/assets/icons/close-outline.svg?raw";
import arrowForwardOutline from "@/assets/icons/arrow-forward-outline.svg?raw";
import starOutline from "@/assets/icons/star-outline.svg?raw";
import globeOutline from "@/assets/icons/globe-outline.svg?raw";
import phonePortraitOutline from "@/assets/icons/phone-portrait-outline.svg?raw";
import desktopOutline from "@/assets/icons/desktop-outline.svg?raw";
import codeSlashOutline from "@/assets/icons/code-slash-outline.svg?raw";
import linkOutline from "@/assets/icons/link-outline.svg?raw";
import trendingUpOutline from "@/assets/icons/trending-up-outline.svg?raw";
import logoGithub from "@/assets/icons/logo-github.svg?raw";
import logoLinkedin from "@/assets/icons/logo-linkedin.svg?raw";
import logoFacebook from "@/assets/icons/logo-facebook.svg?raw";
import mailOutline from "@/assets/icons/mail-outline.svg?raw";
import callOutline from "@/assets/icons/call-outline.svg?raw";
import locationOutline from "@/assets/icons/location-outline.svg?raw";
import sendOutline from "@/assets/icons/send-outline.svg?raw";
import chatbubbleEllipsesOutline from "@/assets/icons/chatbubble-ellipses-outline.svg?raw";
import timeOutline from "@/assets/icons/time-outline.svg?raw";
import reloadOutline from "@/assets/icons/reload-outline.svg?raw";
import shieldCheckmarkOutline from "@/assets/icons/shield-checkmark-outline.svg?raw";
import checkmarkCircleOutline from "@/assets/icons/checkmark-circle-outline.svg?raw";
import calendarOutline from "@/assets/icons/calendar-outline.svg?raw";
import colorPaletteOutline from "@/assets/icons/color-palette-outline.svg?raw";
import serverOutline from "@/assets/icons/server-outline.svg?raw";
import flaskOutline from "@/assets/icons/flask-outline.svg?raw";
import layersOutline from "@/assets/icons/layers-outline.svg?raw";
import cubeOutline from "@/assets/icons/cube-outline.svg?raw";
import hardwareChipOutline from "@/assets/icons/hardware-chip-outline.svg?raw";
import cloudOutline from "@/assets/icons/cloud-outline.svg?raw";
import openOutline from "@/assets/icons/open-outline.svg?raw";
import checkmarkOutline from "@/assets/icons/checkmark-outline.svg?raw";
import locateOutline from "@/assets/icons/locate-outline.svg?raw";
import bulbOutline from "@/assets/icons/bulb-outline.svg?raw";
import peopleOutline from "@/assets/icons/people-outline.svg?raw";
import ribbonOutline from "@/assets/icons/ribbon-outline.svg?raw";
import flashOutline from "@/assets/icons/flash-outline.svg?raw";
import businessOutline from "@/assets/icons/business-outline.svg?raw";
import settingsOutline from "@/assets/icons/settings-outline.svg?raw";
import gitBranchOutline from "@/assets/icons/git-branch-outline.svg?raw";
import briefcaseOutline from "@/assets/icons/briefcase-outline.svg?raw";
import heartOutline from "@/assets/icons/heart-outline.svg?raw";
import cartOutline from "@/assets/icons/cart-outline.svg?raw";
import schoolOutline from "@/assets/icons/school-outline.svg?raw";
import homeOutline from "@/assets/icons/home-outline.svg?raw";
import cashOutline from "@/assets/icons/cash-outline.svg?raw";
import chevronForwardOutline from "@/assets/icons/chevron-forward-outline.svg?raw";
import shieldOutline from "@/assets/icons/shield-outline.svg?raw";
import documentTextOutline from "@/assets/icons/document-text-outline.svg?raw";
import headsetOutline from "@/assets/icons/headset-outline.svg?raw";
import searchOutline from "@/assets/icons/search-outline.svg?raw";
import rocketOutline from "@/assets/icons/rocket-outline.svg?raw";
import moonOutline from "@/assets/icons/moon-outline.svg?raw";
import sunnyOutline from "@/assets/icons/sunny-outline.svg?raw";
import helpBuoyOutline from "@/assets/icons/help-buoy-outline.svg?raw";
import informationCircleOutline from "@/assets/icons/information-circle-outline.svg?raw";

function parse(raw: string) {
  const viewBox = raw.match(/viewBox="([^"]+)"/)?.[1] ?? "0 0 512 512";
  const inner = raw.replace(/^<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
  return { viewBox, inner };
}

function createIcon(raw: string, displayName: string) {
  const { viewBox, inner } = parse(raw);
  const Icon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox={viewBox}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      dangerouslySetInnerHTML={{ __html: inner }}
      {...props}
    />
  );
  Icon.displayName = displayName;
  return Icon;
}

export const MenuIcon = createIcon(menuOutline, "MenuIcon");
export const CloseIcon = createIcon(closeOutline, "CloseIcon");
export const ArrowForwardIcon = createIcon(arrowForwardOutline, "ArrowForwardIcon");
export const StarIcon = createIcon(starOutline, "StarIcon");
export const GlobeIcon = createIcon(globeOutline, "GlobeIcon");
export const PhonePortraitIcon = createIcon(phonePortraitOutline, "PhonePortraitIcon");
export const DesktopIcon = createIcon(desktopOutline, "DesktopIcon");
export const CodeSlashIcon = createIcon(codeSlashOutline, "CodeSlashIcon");
export const LinkIcon = createIcon(linkOutline, "LinkIcon");
export const TrendingUpIcon = createIcon(trendingUpOutline, "TrendingUpIcon");
export const GithubLogoIcon = createIcon(logoGithub, "GithubLogoIcon");
export const LinkedinLogoIcon = createIcon(logoLinkedin, "LinkedinLogoIcon");
export const FacebookLogoIcon = createIcon(logoFacebook, "FacebookLogoIcon");
export const MailIcon = createIcon(mailOutline, "MailIcon");
export const CallIcon = createIcon(callOutline, "CallIcon");
export const LocationIcon = createIcon(locationOutline, "LocationIcon");
export const SendIcon = createIcon(sendOutline, "SendIcon");
export const ChatbubbleIcon = createIcon(chatbubbleEllipsesOutline, "ChatbubbleIcon");
export const TimeIcon = createIcon(timeOutline, "TimeIcon");
export const ReloadIcon = createIcon(reloadOutline, "ReloadIcon");
export const ShieldCheckmarkIcon = createIcon(shieldCheckmarkOutline, "ShieldCheckmarkIcon");
export const CheckmarkCircleIcon = createIcon(checkmarkCircleOutline, "CheckmarkCircleIcon");
export const CalendarIcon = createIcon(calendarOutline, "CalendarIcon");
export const ColorPaletteIcon = createIcon(colorPaletteOutline, "ColorPaletteIcon");
export const ServerIcon = createIcon(serverOutline, "ServerIcon");
export const FlaskIcon = createIcon(flaskOutline, "FlaskIcon");
export const LayersIcon = createIcon(layersOutline, "LayersIcon");
export const CubeIcon = createIcon(cubeOutline, "CubeIcon");
export const HardwareChipIcon = createIcon(hardwareChipOutline, "HardwareChipIcon");
export const CloudIcon = createIcon(cloudOutline, "CloudIcon");
export const OpenIcon = createIcon(openOutline, "OpenIcon");
export const CheckmarkIcon = createIcon(checkmarkOutline, "CheckmarkIcon");
export const LocateIcon = createIcon(locateOutline, "LocateIcon");
export const BulbIcon = createIcon(bulbOutline, "BulbIcon");
export const PeopleIcon = createIcon(peopleOutline, "PeopleIcon");
export const RibbonIcon = createIcon(ribbonOutline, "RibbonIcon");
export const FlashIcon = createIcon(flashOutline, "FlashIcon");
export const BusinessIcon = createIcon(businessOutline, "BusinessIcon");
export const SettingsIcon = createIcon(settingsOutline, "SettingsIcon");
export const GitBranchIcon = createIcon(gitBranchOutline, "GitBranchIcon");
export const BriefcaseIcon = createIcon(briefcaseOutline, "BriefcaseIcon");
export const HeartIcon = createIcon(heartOutline, "HeartIcon");
export const CartIcon = createIcon(cartOutline, "CartIcon");
export const SchoolIcon = createIcon(schoolOutline, "SchoolIcon");
export const HomeIcon = createIcon(homeOutline, "HomeIcon");
export const CashIcon = createIcon(cashOutline, "CashIcon");
export const ChevronForwardIcon = createIcon(chevronForwardOutline, "ChevronForwardIcon");
export const ShieldIcon = createIcon(shieldOutline, "ShieldIcon");
export const DocumentTextIcon = createIcon(documentTextOutline, "DocumentTextIcon");
export const HeadsetIcon = createIcon(headsetOutline, "HeadsetIcon");
export const SearchIcon = createIcon(searchOutline, "SearchIcon");
export const RocketIcon = createIcon(rocketOutline, "RocketIcon");
export const MoonIcon = createIcon(moonOutline, "MoonIcon");
export const SunnyIcon = createIcon(sunnyOutline, "SunnyIcon");
export const HelpBuoyIcon = createIcon(helpBuoyOutline, "HelpBuoyIcon");
export const InformationCircleIcon = createIcon(informationCircleOutline, "InformationCircleIcon");
