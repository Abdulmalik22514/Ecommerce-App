import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

export const Spliff = (props) => {
  return (
    <Svg
      width={props.width || "25"}
      height={props.height || "28"}
      viewBox="0 0 25 28"
      fill={props.fill || "none"}
      {...props}
    >
      <Path
        d="M22.5963 16.6346C22.5277 16.6182 22.5333 16.5277 22.5114 16.4649C22.2044 16.4596 21.9122 16.4691 21.6911 16.5497C21.6171 16.5199 21.5986 16.4348 21.6063 16.3234C21.3337 16.3338 21.1471 16.43 20.899 16.4649C20.8553 16.4238 20.8396 16.3545 20.8425 16.2668C20.545 16.2616 20.3793 16.3883 20.1918 16.4931C20.1039 16.4867 20.144 16.3523 20.1352 16.2668C19.8269 16.2696 19.6664 16.4203 19.4846 16.5497C19.4179 16.4939 19.4453 16.3438 19.3998 16.2668C19.1311 16.3187 18.9991 16.5073 18.8057 16.6346C18.7171 16.6195 18.7038 16.5291 18.6925 16.4366C18.4566 16.5023 18.3197 16.6673 18.1551 16.8043C18.0235 16.8229 18.0564 16.6768 17.9853 16.6346C17.7608 16.7024 17.7043 16.9382 17.4762 17.0024C17.3966 17.0065 17.3946 16.933 17.3913 16.8609C17.1334 16.9802 16.9428 17.1667 16.7407 17.3419C16.652 17.3551 16.6609 17.2707 16.6276 17.2287C16.4213 17.3524 16.2452 17.5064 16.09 17.6812C16.0342 17.6617 16.0146 17.6058 16.0053 17.5398C15.771 17.6733 15.616 17.8861 15.3829 18.0207C15.3289 18.0087 15.2612 18.0105 15.2698 17.9358C14.6985 18.4961 13.8307 18.7598 12.9784 19.0391C13.0539 18.7779 13.3133 18.615 13.5159 18.445C14.2022 17.8693 14.9625 17.2293 16.0053 16.974C16.0263 16.8869 15.9276 16.9196 15.9487 16.8326C16.163 16.5754 16.6076 16.5486 16.967 16.4366C17.0332 16.3622 16.8862 16.3294 16.8822 16.2385C17.1364 16.0967 17.4951 16.0594 17.7591 15.9273C17.781 15.8172 17.6545 15.7807 17.7308 15.701C18.0825 15.6095 18.4169 15.5007 18.6926 15.3333C18.6651 15.2193 18.5336 15.2095 18.5229 15.0787C18.8319 15.0105 19.1491 14.9505 19.3999 14.8241C19.3695 14.6942 19.2455 14.6579 19.2302 14.513C19.5692 14.456 19.8543 14.3451 20.107 14.2018C20.0959 14.0622 19.9661 14.041 19.9373 13.9189C20.1612 13.7938 20.4268 13.7106 20.7294 13.6643C20.7048 13.5549 20.7767 13.5419 20.8142 13.4946C20.7434 13.3767 20.5748 13.3568 20.5596 13.1834C20.8579 13.0762 21.1293 12.9422 21.2951 12.7024C21.2927 12.554 21.1039 12.5919 21.097 12.448C21.3677 12.2941 21.6417 12.1439 21.8325 11.9104C21.8129 11.7886 21.666 11.7941 21.6345 11.6841C21.8208 11.4273 22.0943 11.2576 22.2851 11.0052C22.2595 10.8894 22.1268 10.8807 22.0871 10.7789C22.2783 10.4418 22.8146 10.1808 22.6812 9.70395C22.9262 9.30791 23.1867 8.92716 23.3883 8.48761C23.4642 8.39377 23.5709 8.33077 23.5298 8.11986C22.9672 8.42481 22.4911 8.81619 21.9173 9.10993C21.8099 9.10428 21.81 8.99095 21.6911 8.99673C21.3718 9.17719 21.0758 9.38089 20.8425 9.64739C20.7021 9.64634 20.6693 9.53766 20.6161 9.4494C20.3125 9.60775 20.1471 9.90444 19.909 10.1283C19.8237 10.0722 19.7402 10.0141 19.7109 9.90201C19.4495 10.0837 19.2624 10.3397 19.1452 10.6657C18.994 10.6565 19.0116 10.4786 18.8905 10.4395C18.6562 10.6199 18.4755 10.8543 18.4097 11.2033C18.2226 11.1923 18.2138 11.003 18.0702 10.9486C17.8784 11.1716 17.7616 11.4698 17.7026 11.8256C17.5458 11.8313 17.5336 11.6928 17.4196 11.6558C17.2008 11.8424 17.1164 12.1635 17.0802 12.5327C16.9114 12.5224 16.8929 12.3618 16.7408 12.3348C16.6524 12.6141 16.5352 12.8647 16.5144 13.2116C16.3351 13.2401 16.3721 13.0523 16.2315 13.042C16.0858 13.3488 15.9401 13.6558 15.8921 14.0603C15.7691 14.0701 15.7342 13.9919 15.6375 13.9755C15.567 14.2821 15.4287 14.521 15.3829 14.8524C15.2394 14.8942 15.2079 14.7304 15.1283 14.7959C15.0571 15.1488 14.9717 15.4879 14.8172 15.7576C14.72 15.77 14.6587 15.7464 14.5909 15.7294C14.3174 17.1436 13.3622 17.8763 12.639 18.8409C12.4973 18.7196 12.6192 18.5227 12.639 18.36C12.7934 17.0984 12.9696 15.8158 13.5442 14.9938C13.4006 15.0243 13.3702 14.9416 13.3179 14.8807C13.4594 14.3997 13.6928 14.0109 13.9402 13.636C13.8709 13.5922 13.7561 13.5938 13.6573 13.5794C13.774 13.1398 14.0865 12.8958 14.1665 12.4196C14.0718 12.4106 13.9882 12.3904 13.9401 12.3348C14.1285 11.9007 14.4032 11.553 14.5059 11.0334C14.3678 11.0302 14.2079 11.0487 14.1099 11.0051C14.3018 10.6408 14.5743 10.3568 14.6757 9.90194C14.4994 9.91782 14.3777 9.87937 14.2513 9.84531C14.4114 9.47644 14.7287 9.11695 14.7323 8.68554C14.5514 8.69663 14.4343 8.64406 14.2797 8.62897C14.472 8.28293 14.7594 7.88413 14.7323 7.41256C14.5756 7.44039 14.3752 7.45935 14.2231 7.41256C14.3698 7.09599 14.5703 6.68636 14.4494 6.19622C14.3173 6.22437 14.1989 6.26624 14.0251 6.25279C14.1424 5.9124 14.3306 5.39042 14.1948 4.97988C14.115 5.02273 14.0179 5.04826 13.8836 5.03645C13.8548 5.01807 13.8544 4.97141 13.7986 4.97988C13.8573 4.56841 13.8399 4.2019 13.8271 3.76347C13.695 3.76347 13.5629 3.76347 13.431 3.76347C13.3716 3.08091 13.3811 2.76034 13.2047 2.26422C13.0922 2.28883 13.0625 2.28883 12.9501 2.26422C12.8615 1.40041 12.6259 0.683734 12.356 0.00117888C12.3104 -0.00676163 12.3073 0.0279534 12.2712 0.0295284C12.1183 0.866694 11.9695 1.70793 11.7054 2.43399C11.6161 2.47212 11.5943 2.42343 11.4508 2.46228C11.3074 2.87518 11.2319 3.35601 11.2528 3.93324C11.1146 3.92996 10.9547 3.94853 10.8567 3.90496C10.7818 4.30533 10.8093 4.74048 10.8567 5.14965C10.7564 5.25576 10.5635 5.17445 10.4324 5.14965C10.3557 5.58126 10.494 6.00099 10.6021 6.3377C10.5035 6.42052 10.3447 6.38495 10.2061 6.36599C10.0883 6.84386 10.289 7.24358 10.4324 7.55405C10.2753 7.64146 10.099 7.58555 9.89494 7.5824C9.95269 8.09079 10.1105 8.40243 10.3759 8.74217C10.3141 8.87841 10.0423 8.80471 9.89494 8.85531C10.0035 9.30312 10.1948 9.66813 10.4324 9.9868C10.3242 10.0577 10.1542 10.0669 9.97979 10.0716C10.0922 10.4967 10.3131 10.8134 10.5456 11.1183C10.5053 11.2383 10.3025 11.1958 10.1496 11.2032C10.2693 11.7058 10.5314 12.066 10.7153 12.5044C10.678 12.5803 10.536 12.5514 10.4607 12.5892C10.5648 13.0226 10.8889 13.236 10.9416 13.7208C10.9376 13.8017 10.8236 13.7726 10.7436 13.7774C10.9134 14.2205 11.2059 14.5408 11.3377 15.022C11.3064 15.1134 11.2476 15.1772 11.1113 15.1634C11.7928 16.0646 11.9006 17.3855 12.1014 18.7843C12.0686 18.7797 12.0511 18.7905 12.0448 18.8126C11.6359 18.4746 11.3181 18.0022 10.97 17.5397C10.5806 17.0225 10.1567 16.5296 10.0647 15.7294C9.59011 15.8223 9.67077 15.1271 9.52731 14.7958C9.45073 14.7275 9.42671 14.8833 9.30097 14.8524C9.19617 14.5706 9.10876 14.2713 9.01807 13.9754C8.9176 13.9786 8.91524 14.08 8.7918 14.0603C8.69106 13.699 8.58744 13.3406 8.42404 13.0419C8.30454 13.0638 8.31412 13.2149 8.16942 13.2116C8.09179 12.9121 8.02249 12.6043 7.91486 12.3347C7.78204 12.3716 7.72954 12.4888 7.60367 12.5327C7.52171 12.2092 7.46239 11.8631 7.26427 11.6557C7.13217 11.6746 7.11077 11.804 6.9813 11.8255C6.86639 11.5161 6.79801 11.1602 6.58532 10.9486C6.45224 11.0041 6.42795 11.1684 6.27413 11.2032C6.13947 10.8946 6.03487 10.5561 5.70839 10.4394C5.69297 10.556 5.6154 10.6103 5.53868 10.6657C5.38945 10.3718 5.2101 10.1079 4.97294 9.90194C4.88487 9.95536 4.86892 10.0808 4.77489 10.1282C4.50366 9.93745 4.35496 9.62416 4.06772 9.44933C3.9767 9.4998 3.97099 9.63551 3.84145 9.64732C3.57154 9.40806 3.29828 9.17214 2.96451 8.99666C2.86116 8.99712 2.8374 9.07712 2.76646 9.10986C2.16259 8.82742 1.69325 8.41031 1.09745 8.11979C1.31781 8.69151 1.63504 9.16649 1.94616 9.64732C1.86741 10.2026 2.33183 10.4204 2.56847 10.7506C2.54321 10.8668 2.42988 10.8949 2.37049 10.9769C2.53927 11.2512 2.80879 11.425 3.02108 11.6558C3.01557 11.8012 2.84127 11.7777 2.82303 11.9104C3.01386 12.1439 3.28791 12.2941 3.55854 12.448C3.57055 12.6108 3.35826 12.5493 3.36049 12.7024C3.53774 12.9213 3.75542 13.0996 4.096 13.1551C4.09043 13.3381 3.94881 13.3851 3.84138 13.4663C4.03543 13.7594 4.38823 13.7232 4.66175 13.9189C4.69627 14.0491 4.53798 14.1327 4.5769 14.1735C4.77587 14.3611 5.05681 14.4667 5.42548 14.4847C5.42778 14.6567 5.28642 14.685 5.25584 14.8241C5.52018 14.9276 5.77276 15.0427 6.13271 15.0505C6.13836 15.207 6.00278 15.2223 5.96301 15.3334C6.24959 15.4805 6.52672 15.6372 6.92479 15.6728C6.98845 15.7819 6.89146 15.8035 6.89651 15.9274C7.16878 16.0418 7.47479 16.1224 7.77344 16.2103C7.79103 16.3296 7.61949 16.3534 7.68866 16.4367C8.0513 16.536 8.45528 16.594 8.70701 16.8044C8.73726 16.9101 8.63679 16.885 8.65044 16.974C9.99764 17.3335 10.8469 18.191 11.7338 19.0108C10.9941 18.8831 10.2176 18.547 9.64051 18.1622C9.58401 18.0678 9.48492 18.0159 9.41418 17.9359C9.37638 17.9641 9.35859 18.0124 9.30104 18.0208C9.06368 17.8998 8.88105 17.7241 8.70701 17.5399C8.61035 17.5186 8.67105 17.6548 8.56559 17.6247C8.36321 17.5253 8.23839 17.3484 8.05635 17.2287C7.9837 17.2314 8.01592 17.3391 7.94321 17.3419C7.71563 17.1922 7.53477 16.996 7.29255 16.8609C7.23513 16.879 7.27391 16.9931 7.20763 17.0024C6.95734 16.9603 6.90137 16.724 6.69846 16.6346C6.58368 16.6329 6.64747 16.8099 6.52869 16.8043C6.33044 16.6914 6.21579 16.4951 5.96294 16.4366C5.96373 16.5316 5.92403 16.5863 5.87809 16.6346C5.64723 16.5354 5.54124 16.3114 5.25578 16.2668C5.21109 16.3258 5.23616 16.4546 5.19914 16.5214C5.01323 16.5056 4.84504 16.237 4.5202 16.2668C4.51685 16.3483 4.53562 16.452 4.49191 16.4931C4.25816 16.4252 4.1359 16.2457 3.81303 16.2668C3.82951 16.3586 3.79381 16.3984 3.78482 16.4649C3.51582 16.4415 3.33345 16.3315 3.0493 16.3234C3.06571 16.4341 3.02502 16.4876 2.9928 16.5497C2.75826 16.4825 2.48428 16.4547 2.17237 16.4649C2.13148 16.5088 2.11291 16.5751 2.08752 16.6346C1.56968 16.6487 1.1863 16.6334 0.644836 16.6346C0.94382 16.9391 1.37064 17.1158 1.80468 17.2852C1.86407 17.6596 2.3317 17.6256 2.62498 17.7661C2.64506 17.871 2.57661 17.8875 2.59663 17.9924C2.80695 18.0556 3.02502 18.1109 3.27551 18.1338C3.31678 18.1834 3.25812 18.3044 3.24722 18.3884C3.42355 18.4573 3.68021 18.4458 3.92617 18.4449C3.99133 18.5135 3.89736 18.5824 3.89789 18.6713C4.07783 18.7773 4.373 18.7068 4.60512 18.6995C4.62251 18.8301 4.54159 18.8623 4.54848 18.9824C4.78663 19.0451 5.03082 18.9353 5.25571 18.8976C5.31989 18.9276 5.26647 19.0753 5.284 19.1522C5.55968 19.1544 5.754 19.0753 5.96288 19.0107C6.04412 19.0666 5.95303 19.1872 5.96288 19.2652C6.22905 19.258 6.39862 19.154 6.61347 19.0955C6.67733 19.1166 6.62456 19.2542 6.64176 19.3218C6.89434 19.3484 7.33042 19.0499 7.46219 19.3218C7.66877 19.2739 7.85751 19.208 8.0845 19.1805C8.14297 19.1975 8.19167 19.2242 8.16929 19.3218C8.39221 19.2523 8.61461 19.1824 8.84817 19.1238C8.94661 19.1291 8.97397 19.2056 9.01794 19.2652C9.93103 18.9453 11.2275 19.2277 12.0165 19.3501C11.6071 19.659 11.1455 19.8876 10.5455 19.8875C10.5455 19.9253 10.5455 19.963 10.5455 20.0007C10.2354 19.9735 10.1311 20.152 9.8383 20.1421C9.80156 20.3034 9.5384 20.2383 9.41398 20.3119C9.32893 20.2833 9.36391 20.3749 9.35741 20.425C9.27243 20.4627 9.14105 20.4538 9.01794 20.4533C8.97082 20.5095 9.02056 20.4893 9.01794 20.5664C8.90999 20.6573 8.55909 20.5562 8.67846 20.7928C8.60372 20.85 8.41879 20.797 8.33899 20.8493C8.27737 20.9085 8.35317 20.9301 8.33899 21.019C8.23859 21.06 8.11764 21.0805 8.02787 21.1322C7.97478 21.1861 8.04467 21.1834 8.02787 21.2737C7.93554 21.3417 7.80882 21.3752 7.71674 21.4433C7.69614 21.5205 7.77292 21.5003 7.77325 21.5565C7.68144 21.6345 7.55958 21.6822 7.46212 21.7546C7.40956 21.8046 7.47446 21.8371 7.49034 21.896C7.12199 22.1499 6.96069 22.611 6.61341 22.8861C7.04626 22.7476 7.4618 22.7507 7.80153 22.5466C7.90705 22.5166 7.84629 22.6528 7.94302 22.6315C8.14107 22.3987 8.4352 22.6002 8.59368 22.3203C8.75918 22.438 8.86556 22.2862 8.96137 22.1789C9.06703 22.1486 9.04202 22.249 9.13114 22.2355C9.19204 22.1455 9.28385 22.0864 9.30078 21.9525C9.40643 21.9223 9.38143 22.0228 9.47048 22.0091C9.52705 21.9148 9.61879 21.8557 9.64019 21.7262C9.72727 21.7051 9.69465 21.8039 9.78167 21.7828C9.82459 21.6937 9.90754 21.6448 9.92309 21.5282C9.98084 21.4611 10.035 21.5671 10.0928 21.4999C10.2303 21.2197 10.4538 21.2001 10.5736 20.9058C10.6244 20.9022 10.6333 20.9405 10.6868 20.9341C11.0552 20.3312 11.5433 19.8482 12.1579 19.4915C12.3585 21.281 12.4442 23.6568 12.3558 25.6016C12.3316 26.1365 12.2644 26.711 11.9314 27.0443C11.8894 27.2976 11.8828 27.6738 12.0164 27.8363C12.6456 27.5865 12.5361 26.2799 12.6953 25.5167C12.6814 24.3591 12.7012 22.7073 12.6105 21.2453C12.5734 20.6484 12.5001 20.0649 12.5539 19.5197C13.1439 19.8633 13.5834 20.3571 13.9683 20.9058C14.1654 20.8533 14.1199 21.2035 14.3643 21.1888C14.4134 21.3095 14.4818 21.4108 14.5624 21.4999C14.6163 21.553 14.6335 21.503 14.7039 21.4999C14.748 21.6066 14.8141 21.6915 14.8735 21.7828C14.9507 21.8035 14.9305 21.7267 14.9867 21.7263C15.0562 21.817 15.1094 21.9241 15.1848 22.0092C15.2718 22.0303 15.2392 21.9316 15.3262 21.9525C15.3932 22.0458 15.4431 22.1563 15.5242 22.2355C15.6133 22.2492 15.5883 22.1487 15.6939 22.179C15.7647 22.2402 15.8121 22.3248 15.892 22.3769C16.0682 22.2507 16.1592 22.439 16.288 22.5184C16.4466 22.3863 16.5511 22.5506 16.684 22.6032C16.7498 22.6716 16.7598 22.559 16.8254 22.5467C17.1906 22.7382 17.5958 22.751 18.0418 22.8862C17.6882 22.6268 17.5586 22.1436 17.165 21.9244C17.1642 21.8577 17.2136 21.8411 17.1932 21.7547C17.0883 21.6992 17.0113 21.6159 16.8821 21.585C16.861 21.4978 16.9598 21.5305 16.9386 21.4435C16.8363 21.3951 16.7628 21.3177 16.6275 21.3022C16.6045 21.2043 16.6803 21.1826 16.6275 21.1324C16.522 21.1058 16.4703 21.0255 16.3164 21.0475C16.2507 20.9822 16.3687 20.9563 16.3447 20.8495C16.2412 20.8303 16.1389 20.8101 16.0052 20.8213C15.9256 20.7926 16.013 20.701 16.0052 20.6515C15.8397 20.6183 15.58 20.6282 15.6374 20.4535C15.4434 20.4684 15.2659 20.4667 15.2697 20.2838C15.1212 20.3003 15.0555 20.2339 14.902 20.2555C14.8637 20.2279 14.8653 20.1601 14.8171 20.1424C14.5196 20.1571 14.4275 19.9664 14.11 20.001C14.0602 19.9941 14.0455 19.9523 14.0534 19.8878C13.5748 19.9046 13.0225 19.6314 12.6389 19.3786C13.4218 19.203 14.7123 18.9571 15.6092 19.2654C15.6941 19.2466 15.6889 19.1377 15.7789 19.124C16.0331 19.1716 16.2531 19.2534 16.4861 19.322C16.4619 19.2318 16.5108 19.2147 16.5427 19.1807C16.7789 19.199 16.9672 19.2652 17.1651 19.322C17.3232 19.0575 17.74 19.3431 18.0137 19.322C18.0137 19.2465 18.0137 19.1711 18.0137 19.0957C18.254 19.1383 18.4126 19.2624 18.6925 19.2654C18.6913 19.1724 18.6448 19.1246 18.6642 19.0109C18.8993 19.0587 19.0801 19.1608 19.3714 19.1524C19.3714 19.0675 19.3714 18.9826 19.3714 18.8978C19.6222 18.918 19.8478 19.0583 20.1069 18.9826C20.1157 18.8701 20.0416 18.8405 20.0503 18.728C20.2307 18.6623 20.586 18.8012 20.7576 18.6715C20.7528 18.5914 20.7056 18.5536 20.7009 18.4734C20.9001 18.4085 21.2354 18.4798 21.4082 18.3886C21.3786 18.3238 21.3902 18.218 21.3515 18.1622C21.571 18.0895 21.8478 18.074 22.0587 17.9925C22.0815 17.8944 22.0166 17.8837 22.0305 17.7945C22.2542 17.594 22.7851 17.7004 22.8225 17.3136C23.2442 17.113 23.7085 16.955 24.0106 16.6346C23.4211 16.6334 23.1524 16.6533 22.5963 16.6346Z"
        fill={props.fill || "white"}
      />
      <Path
        d="M12.6099 21.2467C12.6055 21.1756 12.3453 20.6516 12.3327 19.8116C12.2609 15.0291 12.3327 0.00256348 12.3327 0.00256348C12.3074 0.00741966 12.2966 0.0110946 12.2705 0.0308474C12.1175 0.868013 11.9688 1.70925 11.7046 2.43531C11.6153 2.47344 11.5935 2.42475 11.4501 2.4636C11.3067 2.8765 11.2312 3.35733 11.252 3.93456C11.1139 3.93128 10.954 3.94985 10.856 3.90628C10.781 4.30665 10.8086 4.7418 10.856 5.15097C10.7557 5.25708 10.5628 5.17577 10.4317 5.15097C10.355 5.58258 10.4933 6.00231 10.6014 6.33902C10.5028 6.42184 10.344 6.38627 10.2054 6.36731C10.0876 6.84518 10.2883 7.2449 10.4317 7.55537C10.2746 7.64278 10.0982 7.58687 9.89421 7.58372C9.95195 8.0921 10.1098 8.40375 10.3752 8.74349C10.3134 8.87973 10.0416 8.80603 9.89421 8.85663C10.0027 9.30444 10.194 9.66945 10.4317 9.98812C10.3235 10.0591 10.1534 10.0682 9.97906 10.073C10.0915 10.498 10.3124 10.8147 10.5449 11.1196C10.5046 11.2396 10.3017 11.1971 10.1488 11.2045C10.2686 11.7071 10.5306 12.0673 10.7146 12.5057C10.6772 12.5816 10.5352 12.5527 10.46 12.5906C10.5641 13.0239 10.8881 13.2373 10.9408 13.7221C10.9369 13.803 10.8229 13.7739 10.7429 13.7787C10.9126 14.2219 11.2052 14.5422 11.3369 15.0233C11.3056 15.1147 11.2468 15.1785 11.1106 15.1647C11.7921 16.066 11.8999 17.3868 12.1007 18.7856C12.0679 18.781 12.0503 18.7918 12.0441 18.814C11.6351 18.4759 11.3174 18.0035 10.9693 17.541C10.5798 17.0238 10.156 16.531 10.064 15.7307C9.58938 15.8237 9.67003 15.1284 9.52658 14.7971C9.45 14.7288 9.42598 14.8846 9.30024 14.8537C9.19544 14.572 9.10803 14.2726 9.01734 13.9767C8.91687 13.98 8.9145 14.0813 8.79107 14.0616C8.69033 13.7003 8.58671 13.3419 8.42331 13.0432C8.30381 13.0651 8.31339 13.2162 8.16869 13.2129C8.09105 12.9134 8.02176 12.6056 7.91413 12.336C7.78131 12.3729 7.72881 12.4902 7.60294 12.534C7.52098 12.2105 7.46165 11.8644 7.26354 11.6571C7.13143 11.6759 7.11004 11.8053 6.98056 11.8268C6.86566 11.5174 6.79728 11.1615 6.58459 10.9499C6.4515 11.0054 6.42722 11.1697 6.2734 11.2045C6.13874 10.896 6.03413 10.5575 5.70765 10.4407C5.69223 10.5573 5.61467 10.6116 5.53795 10.667C5.38872 10.3731 5.20937 10.1092 4.97221 9.90326C4.88414 9.95668 4.86819 10.0821 4.77415 10.1295C4.50293 9.93877 4.35422 9.62548 4.06699 9.45065C3.97597 9.50112 3.97026 9.63683 3.84072 9.64864C3.5708 9.40938 3.29755 9.17346 2.96378 8.99798C2.86042 8.99844 2.83667 9.07843 2.76573 9.11118C2.16186 8.82874 1.69251 8.41163 1.09671 8.12111C1.31708 8.69283 1.63431 9.16781 1.94543 9.64864C1.86668 10.2039 2.3311 10.4218 2.56774 10.7519C2.54248 10.8681 2.42914 10.8962 2.36975 10.9782C2.53854 11.2526 2.80806 11.4263 3.02035 11.6571C3.01484 11.8025 2.84054 11.7791 2.8223 11.9118C3.01313 12.1452 3.28718 12.2955 3.55781 12.4493C3.56982 12.6122 3.35753 12.5507 3.35976 12.7038C3.53701 12.9226 3.75468 13.1009 4.09527 13.1564C4.08969 13.3394 3.94808 13.3864 3.84065 13.4676C4.0347 13.7607 4.3875 13.7245 4.66102 13.9202C4.69554 14.0504 4.53725 14.134 4.57616 14.1749C4.77514 14.3624 5.05607 14.468 5.42475 14.486C5.42705 14.6581 5.28569 14.6863 5.25511 14.8255C5.51944 14.9289 5.77203 15.044 6.13198 15.0518C6.13762 15.2083 6.00204 15.2236 5.96228 15.3347C6.24886 15.4818 6.52599 15.6385 6.92406 15.6741C6.98772 15.7832 6.89072 15.8048 6.89578 15.9287C7.16805 16.0431 7.47406 16.1237 7.77271 16.2116C7.7903 16.3309 7.61876 16.3548 7.68793 16.438C8.05056 16.5373 8.45455 16.5953 8.70628 16.8057C8.73653 16.9114 8.63606 16.8863 8.64971 16.9754C9.99691 17.3349 10.8461 18.1923 11.7331 19.0121C10.9933 18.8844 10.2169 18.5483 9.63978 18.1635C9.58328 18.0691 9.48419 18.0172 9.41344 17.9372C9.37564 17.9654 9.35786 18.0137 9.30031 18.0221C9.06295 17.9011 8.88031 17.7255 8.70628 17.5412C8.60962 17.5199 8.67032 17.6561 8.56486 17.626C8.36248 17.5266 8.23766 17.3497 8.05562 17.23C7.98297 17.2327 8.01519 17.3404 7.94248 17.3432C7.7149 17.1936 7.53404 16.9973 7.29182 16.8622C7.2344 16.8803 7.27318 16.9945 7.2069 17.0037C6.95661 16.9617 6.90063 16.7253 6.69772 16.636C6.58295 16.6343 6.64673 16.8112 6.52796 16.8057C6.32971 16.6927 6.21506 16.4964 5.96221 16.4379C5.963 16.5329 5.9233 16.5876 5.87736 16.6359C5.64649 16.5367 5.54051 16.3127 5.25505 16.2681C5.21036 16.3271 5.23542 16.456 5.19841 16.5227C5.0125 16.5069 4.84431 16.2383 4.51947 16.2681C4.51612 16.3496 4.53489 16.4533 4.49118 16.4944C4.25743 16.4265 4.13517 16.247 3.8123 16.2681C3.82877 16.3599 3.79307 16.3997 3.78408 16.4662C3.51509 16.4428 3.33272 16.3328 3.04857 16.3247C3.06497 16.4354 3.02429 16.4889 2.99207 16.551C2.75753 16.4838 2.48355 16.456 2.17163 16.4662C2.13075 16.5102 2.11218 16.5764 2.08678 16.6359C1.56894 16.65 1.18557 16.6347 0.644104 16.6359C0.943087 16.9404 1.36991 17.1171 1.80394 17.2866C1.86333 17.6609 2.33097 17.627 2.62424 17.7675C2.64432 17.8723 2.57588 17.8888 2.59589 17.9937C2.80622 18.0569 3.02429 18.1122 3.27477 18.1351C3.31605 18.1848 3.25738 18.3058 3.24649 18.3898C3.42282 18.4587 3.67948 18.4471 3.92544 18.4463C3.9906 18.5148 3.89663 18.5837 3.89715 18.6726C4.07709 18.7786 4.37227 18.7081 4.60438 18.7008C4.62177 18.8314 4.54086 18.8636 4.54775 18.9837C4.7859 19.0465 5.03009 18.9366 5.25498 18.8989C5.31916 18.9289 5.26574 19.0767 5.28326 19.1535C5.55895 19.1557 5.75326 19.0766 5.96214 19.012C6.04339 19.0679 5.9523 19.1885 5.96214 19.2666C6.22832 19.2593 6.39789 19.1553 6.61274 19.0969C6.67659 19.1179 6.62383 19.2555 6.64103 19.3231C6.89361 19.3497 7.32968 19.0513 7.46146 19.3231C7.66804 19.2752 7.85678 19.2093 8.08377 19.1818C8.14224 19.1988 8.19093 19.2256 8.16856 19.3231C8.39148 19.2536 8.61388 19.1838 8.84744 19.1251C8.94587 19.1305 8.97324 19.2069 9.01721 19.2666C9.9303 18.9466 11.2268 19.229 12.0158 19.3514C11.6063 19.6603 11.1447 19.8889 10.5447 19.8888V20.002C10.2347 19.9748 10.1303 20.1533 9.83757 20.1434C9.80082 20.3047 9.53767 20.2396 9.41325 20.3132C9.3282 20.2846 9.36318 20.3762 9.35668 20.4263C9.2717 20.464 9.14032 20.4551 9.01721 20.4546C8.97009 20.5108 9.01983 20.4906 9.01721 20.5678C8.90925 20.6586 8.55836 20.5575 8.67773 20.7941C8.60299 20.8513 8.41806 20.7984 8.33826 20.8507C8.27664 20.9098 8.35243 20.9314 8.33826 21.0203C8.23785 21.0613 8.11691 21.0818 8.02714 21.1335C7.97405 21.1874 8.04394 21.1847 8.02714 21.275C7.9348 21.343 7.80808 21.3765 7.71601 21.4446C7.69541 21.5219 7.77219 21.5017 7.77251 21.5578C7.68071 21.6358 7.55884 21.6835 7.46139 21.7559C7.40883 21.8059 7.47373 21.8384 7.48961 21.8974C7.12126 22.1512 6.95996 22.6123 6.61268 22.8874C7.04553 22.7489 7.46106 22.7521 7.8008 22.548C7.90632 22.5179 7.84555 22.6541 7.94228 22.6328C8.14034 22.4001 8.43446 22.6015 8.59295 22.3216C8.75845 22.4394 8.86483 22.2876 8.96064 22.1802C9.06629 22.15 9.04129 22.2504 9.13041 22.2368C9.19131 22.1469 9.28311 22.0877 9.30005 21.9538C9.4057 21.9236 9.3807 22.0242 9.46975 22.0104C9.52632 21.9161 9.61806 21.857 9.63945 21.7275C9.72654 21.7065 9.69392 21.8052 9.78094 21.7841C9.82386 21.6951 9.90681 21.6461 9.92236 21.5295C9.98011 21.4624 10.0342 21.5684 10.0921 21.5012C10.2296 21.221 10.4531 21.2014 10.5729 20.9071C10.6237 20.9036 10.6326 20.9418 10.6861 20.9355C11.0544 20.3326 11.5426 19.8495 12.1571 19.4928C12.3578 21.2823 12.4434 23.6581 12.3551 25.603C12.3308 26.1379 12.2637 26.7123 11.9307 27.0456C11.8887 27.2989 11.882 27.6751 12.0156 27.8377C12.6448 27.5878 12.5354 26.2812 12.6946 25.518C12.6809 24.3605 12.7007 22.7087 12.6099 21.2467Z"
        fill={props.fill || "white"}
      />
    </Svg>
  );
};

export const Check = () => {
  return (
    <Svg width="11" height="10" viewBox="0 0 11 10" fill="none">
      <Path
        d="M9.11795 0.816551C7.76201 1.99009 6.61483 3.10721 5.56456 4.56473C5.10138 5.20759 4.58629 5.96423 4.2496 6.6786C4.05738 7.05741 3.71088 7.64932 3.59276 8.21841C2.94669 7.61734 2.25272 6.9351 1.54269 6.40073C1.0366 6.02 -0.421081 6.79625 0.172276 7.24271C1.23572 8.04259 2.12013 9.03885 3.15449 9.87441C3.58713 10.2235 4.54595 9.46539 4.77128 9.14734C5.51088 8.09948 5.61197 6.81859 6.15101 5.67559C6.97403 3.9275 8.43363 2.49151 9.87476 1.24453C10.8296 0.354015 9.84342 0.189765 9.1194 0.816551"
        fill="#81AA66"
      />
    </Svg>
  );
};

export const Menu = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M19.1667 10.816H0.833333C0.373332 10.816 0 10.4427 0 9.98269C0 9.52268 0.373332 9.14935 0.833333 9.14935H19.1667C19.6267 9.14935 20 9.52268 20 9.98269C20 10.4427 19.6267 10.816 19.1667 10.816Z"
        fill="black"
      />
      <Path
        d="M19.1667 4.4271H0.833333C0.373332 4.4271 0 4.05377 0 3.59377C0 3.13377 0.373332 2.76044 0.833333 2.76044H19.1667C19.6267 2.76044 20 3.13377 20 3.59377C20 4.05377 19.6267 4.4271 19.1667 4.4271Z"
        fill="black"
      />
      <Path
        d="M19.1667 17.2048H0.833333C0.373332 17.2048 0 16.8315 0 16.3715C0 15.9115 0.373332 15.5381 0.833333 15.5381H19.1667C19.6267 15.5381 20 15.9115 20 16.3715C20 16.8315 19.6267 17.2048 19.1667 17.2048Z"
        fill="black"
      />
    </Svg>
  );
};

export const Search = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M13.478 13.0557C14.7566 11.6716 15.5543 9.81819 15.5543 7.77713C15.5543 3.49559 12.0704 0 7.77713 0C3.48387 0 0 3.49559 0 7.77713C0 12.0587 3.48387 15.5543 7.77713 15.5543C9.52495 15.5543 11.132 14.9795 12.434 14.0059L18.217 19.7889C18.3578 19.9296 18.5337 20 18.7097 20C18.8856 20 19.0733 19.9296 19.2023 19.7889C19.4721 19.519 19.4721 19.0733 19.2023 18.7918L13.478 13.0557ZM1.40763 7.77713C1.40763 4.26978 4.25807 1.40763 7.77713 1.40763C11.2845 1.40763 14.1466 4.25807 14.1466 7.77713C14.1466 11.2962 11.2962 14.1466 7.77713 14.1466C4.25807 14.1466 1.40763 11.2845 1.40763 7.77713Z"
        fill="#212224"
      />
    </Svg>
  );
};

export const Heart = () => {
  return (
    <Svg width="20" height="18" viewBox="0 0 20 18" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 1.67302C11.0922 0.599923 12.5316 0 14.0704 0C17.34 0 20 2.75348 20 6.13794C20 12.4397 10.7629 17.3674 10.3696 17.5742L9.98222 17.7778L9.60267 17.5588C9.21067 17.3327 0 11.9525 0 6.13794C0 2.75348 2.66 0 5.92956 0C7.46822 0 8.90733 0.600153 10 1.67302ZM1.63249 6.13789C1.63249 9.95182 7.35515 14.2341 10.0125 15.854C11.6974 14.8865 18.3672 10.7627 18.3672 6.13789C18.3672 3.68529 16.4396 1.69 14.0703 1.69C12.7174 1.69 11.4703 2.3304 10.6494 3.44675L9.99982 4.32984L9.35027 3.44675C8.52915 2.3304 7.28226 1.69 5.92938 1.69C3.56004 1.69 1.63249 3.68529 1.63249 6.13789Z"
        fill="#212224"
      />
    </Svg>
  );
};

export const SearchIcon = () => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M12.1302 11.7502C13.2809 10.5044 13.9988 8.83637 13.9988 6.99942C13.9988 3.14603 10.8633 0 6.99942 0C3.13549 0 0 3.14603 0 6.99942C0 10.8528 3.13549 13.9988 6.99942 13.9988C8.57245 13.9988 10.0188 13.4815 11.1906 12.6053L16.3953 17.81C16.522 17.9367 16.6803 18 16.8387 18C16.9971 18 17.166 17.9367 17.2821 17.81C17.5249 17.5671 17.5249 17.166 17.2821 16.9126L12.1302 11.7502ZM1.26686 6.99942C1.26686 3.84281 3.83226 1.26686 6.99942 1.26686C10.156 1.26686 12.732 3.83226 12.732 6.99942C12.732 10.1666 10.1666 12.732 6.99942 12.732C3.83226 12.732 1.26686 10.156 1.26686 6.99942Z"
        fill="#999999"
      />
    </Svg>
  );
};

export const Add = () => {
  return (
    <Svg width="33" height="33" viewBox="0 0 33 33" fill="none">
      <Rect width="33" height="33" rx="2" fill="#81AA66" />
      <Path
        d="M17.975 15.6435H22.65C22.7824 15.6435 22.8816 15.687 22.9473 15.7527C23.013 15.8184 23.0565 15.9176 23.0565 16.05V17.15C23.0565 17.2824 23.013 17.3816 22.9473 17.4473C22.8816 17.513 22.7824 17.5565 22.65 17.5565H17.975C17.8599 17.5565 17.7528 17.5955 17.6742 17.6742C17.5955 17.7528 17.5565 17.8599 17.5565 17.975V22.65C17.5565 22.7824 17.513 22.8816 17.4473 22.9473C17.3816 23.013 17.2824 23.0565 17.15 23.0565H16.05C15.9176 23.0565 15.8184 23.013 15.7527 22.9473C15.687 22.8816 15.6435 22.7824 15.6435 22.65V17.975C15.6435 17.8599 15.6045 17.7528 15.5258 17.6742C15.4472 17.5955 15.3401 17.5565 15.225 17.5565H10.55C10.4176 17.5565 10.3184 17.513 10.2527 17.4473C10.187 17.3816 10.1435 17.2824 10.1435 17.15V16.05C10.1435 15.9176 10.187 15.8184 10.2527 15.7527C10.3184 15.687 10.4176 15.6435 10.55 15.6435H15.225C15.3401 15.6435 15.4472 15.6045 15.5258 15.5258C15.6045 15.4472 15.6435 15.3401 15.6435 15.225V10.55C15.6435 10.4176 15.687 10.3184 15.7527 10.2527C15.8184 10.187 15.9176 10.1435 16.05 10.1435H17.15C17.2824 10.1435 17.3816 10.187 17.4473 10.2527C17.513 10.3184 17.5565 10.4176 17.5565 10.55V15.225C17.5565 15.3401 17.5955 15.4472 17.6742 15.5258C17.7528 15.6045 17.8599 15.6435 17.975 15.6435Z"
        fill="white"
        stroke="white"
        stroke-width="0.286957"
      />
    </Svg>
  );
};

export const Back = (props) => {
  return (
    <Svg width="21" height="14" viewBox="0 0 21 14" fill="none" {...props}>
      <Path
        d="M7.57889 0.266687C7.94948 0.629381 7.94948 1.23145 7.58616 1.6014L3.17543 6.01902H19.9827C20.4986 6.01902 20.9201 6.43974 20.9201 6.96202C20.9201 7.4843 20.4986 7.90503 19.9827 7.90503H3.17543L7.59343 12.3226C7.95675 12.6926 7.94948 13.2874 7.58616 13.6574C7.21557 14.0201 6.62699 14.0201 6.2564 13.6501L0.268858 7.62938C0.188927 7.54233 0.123529 7.44803 0.0726644 7.33197C0.0217993 7.21591 0 7.09259 0 6.96928C0 6.72265 0.0944637 6.49052 0.268858 6.30917L6.2564 0.288449C6.61246 -0.0887534 7.2083 -0.0960073 7.57889 0.266687Z"
        fill="#212224"
      />
    </Svg>
  );
};

export const Forward = (props) => {
  return (
    <Svg width="18" height="16" viewBox="0 0 18 16" fill="none" {...props}>
      <Path
        d="M17.7978 6.69944L11.2009 0.120002C11.1214 0.0402511 11.0466 -0.0046087 10.9391 0.000375722C10.7334 0.0103446 10.4716 0.164862 10.4716 0.39913V3.69882C10.4716 3.79851 10.3968 3.88823 10.3032 3.90318C3.74377 4.97483 0.980651 10.2085 0.00350861 15.6415C-0.033894 15.8558 0.237275 16.0552 0.363509 15.8857C2.75727 12.6708 5.67 10.5723 10.2752 10.5325C10.3781 10.5325 10.4716 10.6621 10.4716 10.7717V14.0116C10.4716 14.3605 10.9064 14.515 11.1495 14.2758L17.7931 7.58168C17.9147 7.46206 17.9521 7.32249 17.9568 7.16299C17.9521 7.00349 17.9147 6.81907 17.7978 6.69944Z"
        fill="#212224"
      />
    </Svg>
  );
};

export const Addition = (props) => {
  return (
    <Svg
      width={props.width || "23"}
      height={props.height || "24"}
      viewBox="0 0 23 24"
      fill="none"
      {...props}
    >
      <Rect
        y="0.776978"
        width="22.2803"
        height="22.2803"
        rx="1.35032"
        fill="#999999"
      />
      <Path
        d="M12.136 11.3389H15.2924C15.3817 11.3389 15.4487 11.3683 15.4931 11.4127C15.5374 11.4571 15.5668 11.524 15.5668 11.6134V12.3561C15.5668 12.4455 15.5374 12.5124 15.4931 12.5568C15.4487 12.6012 15.3817 12.6305 15.2924 12.6305H12.136C12.0583 12.6305 11.986 12.6569 11.9329 12.71C11.8798 12.7631 11.8534 12.8354 11.8534 12.9131V16.0695C11.8534 16.1588 11.8241 16.2258 11.7797 16.2702C11.7353 16.3145 11.6684 16.3439 11.579 16.3439H10.8363C10.7469 16.3439 10.68 16.3145 10.6356 16.2702C10.5912 16.2258 10.5618 16.1588 10.5618 16.0695V12.9131C10.5618 12.8354 10.5355 12.7631 10.4824 12.71C10.4293 12.6569 10.357 12.6305 10.2793 12.6305H7.12292C7.03354 12.6305 6.96657 12.6012 6.9222 12.5568C6.87783 12.5124 6.84846 12.4455 6.84846 12.3561V11.6134C6.84846 11.524 6.87783 11.4571 6.9222 11.4127C6.96657 11.3683 7.03354 11.3389 7.12292 11.3389H10.2793C10.357 11.3389 10.4293 11.3126 10.4824 11.2595C10.5355 11.2064 10.5618 11.1341 10.5618 11.0564V7.90002C10.5618 7.81064 10.5912 7.74367 10.6356 7.6993C10.68 7.65493 10.7469 7.62556 10.8363 7.62556H11.579C11.6684 7.62556 11.7353 7.65493 11.7797 7.6993C11.8241 7.74367 11.8534 7.81064 11.8534 7.90002V11.0564C11.8534 11.1341 11.8798 11.2064 11.9329 11.2595C11.986 11.3126 12.0583 11.3389 12.136 11.3389Z"
        fill="white"
        stroke="white"
        stroke-width="0.193741"
      />
    </Svg>
  );
};

export const Subtraction = (props) => {
  return (
    <Svg
      width={props.width || "23"}
      height={props.height || "24"}
      viewBox="0 0 23 24"
      fill="none"
      {...props}
    >
      <Rect
        x="0.719604"
        y="0.776978"
        width="22.2803"
        height="22.2803"
        rx="1.35032"
        fill="#999999"
      />
      <Path
        d="M12.8557 11.3389H16.0121C16.1015 11.3389 16.1684 11.3683 16.2128 11.4127C16.2572 11.4571 16.2865 11.524 16.2865 11.6134V12.3561C16.2865 12.4455 16.2572 12.5124 16.2128 12.5568C16.1684 12.6012 16.1015 12.6305 16.0121 12.6305H10.999H7.84265C7.75326 12.6305 7.6863 12.6012 7.64193 12.5568C7.59756 12.5124 7.56818 12.4455 7.56818 12.3561V11.6134C7.56818 11.524 7.59756 11.4571 7.64193 11.4127C7.6863 11.3683 7.75326 11.3389 7.84265 11.3389H12.8557Z"
        fill="white"
        stroke="white"
        stroke-width="0.193741"
      />
    </Svg>
  );
};

export const Checked = () => {
  return (
    <Svg width="30" height="23" viewBox="0 0 30 23" fill="none">
      <Path
        d="M29.0492 1.56675L28.1903 0.70875C27.2472 -0.23625 25.7022 -0.23625 24.7563 0.70875L10.1722 15.2947L4.99725 10.1217C4.05425 9.17775 2.50825 9.17775 1.56525 10.1227L0.70725 10.9797C-0.23575 11.9237 -0.23575 13.4687 0.70725 14.4127L8.45125 22.1648C9.39525 23.1078 10.9402 23.1078 11.8842 22.1648L29.0492 4.99975C29.9912 4.05575 29.9912 2.51075 29.0492 1.56675Z"
        fill="white"
      />
    </Svg>
  );
};