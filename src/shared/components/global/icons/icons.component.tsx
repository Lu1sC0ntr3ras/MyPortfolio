import { ISvgConfig } from '@/data/interface/global/image-card.interface';

export const HTML5 = ({
  fill = 'black',
  height = '20px',
  width = '20px'
}: ISvgConfig) => {
  return (
    <svg stroke="currentColor" fill={fill} strokeWidth="0" viewBox="0 0 512 512" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
      <g id="c133de6af664cd4f011a55de6b0011b2">
        <path
          display="inline"
          d="M30.713,0.501L71.717,460.42l184.006,51.078l184.515-51.15L481.287,0.501H30.713z M395.754,109.646l-2.567,28.596l-1.128,12.681h-0.187H256h-0.197h-79.599l5.155,57.761h74.444H256h115.723h15.201l-1.377,15.146l-13.255,148.506l-0.849,9.523L256,413.854v0.012l-0.259,0.072l-115.547-32.078l-7.903-88.566h26.098h30.526l4.016,44.986l62.82,16.965l0.052-0.014v-0.006l62.916-16.977l6.542-73.158H256h-0.197H129.771l-13.863-155.444l-1.351-15.131h141.247H256h141.104L395.754,109.646z">
        </path>
      </g>
    </svg>
  );
};

export const CSS = ({
  fill = 'black',
  height = '20px',
  width = '20px'
}: ISvgConfig) => {
  return (
    <svg stroke="currentColor" fill={fill} strokeWidth="0" viewBox="0 0 512 512" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
      <g id="c133de6af664cd4f011a55de6b001b19">
        <path display="inline" d="M483.111,0.501l-42.59,461.314l-184.524,49.684L71.47,461.815L28.889,0.501H483.111z M397.29,94.302H255.831H111.866l6.885,55.708h137.08h7.7l-7.7,3.205l-132.07,55.006l4.38,54.453l127.69,0.414l68.438,0.217l-4.381,72.606l-64.058,18.035v-0.057l-0.525,0.146l-61.864-15.617l-3.754-45.07h-0.205H132.1h-0.202l7.511,87.007l116.423,34.429v-0.062l0.21,0.062l115.799-33.802l15.021-172.761h-131.03h-0.323l0.323-0.14l135.83-58.071L397.29,94.302z">
        </path>
      </g>
    </svg>
  );
};

export const JavaScript = ({ fill = 'black', height = '55px', width = '55px' }: ISvgConfig) => {
  return (
    <svg width={width} height={height} fill={fill} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="50" height="50" fill="none"/>
      <path d="M3,3H21V21H3V3M7.73,18a2.63,2.63,0,0,0,2.54,1.55A2.3,2.3,0,0,0,12.8,17V11.26H11.1V17c0,.86-.35,1.08-.9,1.08s-.82-.4-1.09-.87L7.73,18m6-.18a3.26,3.26,0,0,0,3.09,1.73c1.6,0,2.8-.83,2.8-2.36s-.81-2-2.25-2.66l-.42-.18c-.73-.31-1-.52-1-1a.74.74,0,0,1,.81-.73,1.16,1.16,0,0,1,1.09.73l1.31-.87a2.5,2.5,0,0,0-2.4-1.33,2.26,2.26,0,0,0-2.48,2.23c0,1.38.81,2,2,2.55l.42.18c.78.34,1.24.55,1.24,1.13s-.45.83-1.15.83a1.83,1.83,0,0,1-1.67-1Z"/>
    </svg>
  );
};

export const TypeScript = ({
  fill = 'black',
  height = '25px',
  width = '25px'
}: ISvgConfig) => {
  return (
    <svg width={width} height={height} fill={fill} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 16v16h32v-32h-32zM25.786 14.724c0.813 0.203 1.432 0.568 2.005 1.156 0.292 0.312 0.729 0.885 0.766 1.026 0.010 0.042-1.38 0.974-2.224 1.495-0.031 0.021-0.156-0.109-0.292-0.313-0.411-0.599-0.844-0.859-1.505-0.906-0.969-0.063-1.594 0.443-1.589 1.292-0.005 0.208 0.042 0.417 0.135 0.599 0.214 0.443 0.615 0.708 1.854 1.245 2.292 0.984 3.271 1.635 3.88 2.557 0.682 1.031 0.833 2.677 0.375 3.906-0.51 1.328-1.771 2.234-3.542 2.531-0.547 0.099-1.849 0.083-2.438-0.026-1.286-0.229-2.505-0.865-3.255-1.698-0.297-0.323-0.87-1.172-0.833-1.229 0.016-0.021 0.146-0.104 0.292-0.188s0.682-0.396 1.188-0.688l0.922-0.536 0.193 0.286c0.271 0.411 0.859 0.974 1.214 1.161 1.021 0.542 2.422 0.464 3.115-0.156 0.281-0.234 0.438-0.594 0.417-0.958 0-0.37-0.047-0.536-0.24-0.813-0.25-0.354-0.755-0.656-2.198-1.281-1.651-0.714-2.365-1.151-3.010-1.854-0.406-0.464-0.708-1.010-0.88-1.599-0.12-0.453-0.151-1.589-0.057-2.042 0.339-1.599 1.547-2.708 3.281-3.036 0.563-0.109 1.875-0.068 2.427 0.068zM18.276 16.063l0.010 1.307h-4.167v11.839h-2.948v-11.839h-4.161v-1.281c0-0.714 0.016-1.307 0.036-1.323 0.016-0.021 2.547-0.031 5.62-0.026l5.594 0.016z"/>
    </svg>
  );
};

export const SQL = ({
  fill = 'black',
  height = '25px',
  width = '25px'
}: ISvgConfig) => {
  return (
    <svg width={width} height={height} fill={fill} viewBox="-1.61 0 70 70" xmlns="http://www.w3.org/2000/svg">
      <path d="m -68.256041,544.14439 c -3.2225,-0.64097 -6.0047,-2.84478 -7.3573,-5.82793 -0.595,-1.31236 -0.8482,-2.55217 -0.8438,-4.13316 0.012,-4.5438 2.8692,-8.33798 7.3079,-9.70579 0.8177,-0.25196 1.3573,-0.31847 2.611,-0.32182 0.8692,-0.002 1.8277,0.0437 2.1301,0.10227 l 0.5497,0.10649 0.6765,-1.31365 c 1.3815,-2.68242 3.5345,-4.78981 6.3178,-6.18379 2.2961,-1.15 3.739,-1.48443 6.4043,-1.48443 1.8668,0 2.2999,0.045 3.5043,0.36412 5.2011,1.37813 9.255,5.45998 10.5309,10.60353 0.3195,1.2879 0.4789,4.17568 0.293,5.30849 l -0.1269,0.77355 0.7284,0.163 c 1.8256,0.40854 3.4011,1.68396 4.2066,3.40532 0.7966,1.70226 0.6508,3.90495 -0.3651,5.51414 -0.5185,0.82136 -1.535,1.73424 -2.3832,2.14031 -0.4348,0.20813 -0.8979,0.43475 -1.0292,0.50361 -0.2947,0.15465 -32.3751,0.14085 -33.155,-0.0143 z m 33.351,-1.89876 c 0.9026,-0.44879 1.7953,-1.45217 2.1662,-2.43497 0.7697,-2.03891 -0.2571,-4.40792 -2.3055,-5.31934 -0.5173,-0.23017 -0.9037,-0.28342 -1.9824,-0.27321 -0.737,0.007 -1.3399,-0.0395 -1.3399,-0.10328 0,-0.0638 0.1369,-0.66194 0.3042,-1.32926 0.428,-1.70717 0.4237,-4.42927 -0.01,-6.09178 -0.9556,-3.66584 -3.4332,-6.72357 -6.8221,-8.4192 -1.4892,-0.74512 -2.9056,-1.08594 -4.841,-1.16493 -2.8639,-0.11687 -4.8633,0.33445 -7.0666,1.59507 -2.5693,1.47003 -4.784,4.13385 -5.6425,6.78661 -0.1651,0.51018 -0.3653,0.9268 -0.4449,0.92583 -0.08,-9.6e-4 -0.5467,-0.13408 -1.038,-0.29579 -1.3668,-0.44991 -3.6978,-0.42255 -5.0619,0.0594 -1.3731,0.48513 -2.3616,1.10694 -3.3908,2.13292 -1.5427,1.53788 -2.3996,3.63391 -2.3996,5.86959 0,3.32007 1.8288,6.23059 4.8041,7.64574 1.71,0.81331 1.1183,0.78892 18.4849,0.76186 l 15.941,-0.0248 0.6444,-0.32043 z m -45.9938,-6.42576 c -5.7671,-0.78155 -10.2061,-2.22963 -13.4896,-4.40056 -1.3548,-0.89576 -2.2902,-1.89766 -2.8176,-3.01787 l -0.3929,-0.83466 0.036,-22.59585 0.036,-22.59585 0.3281,-0.61562 c 0.8294,-1.55619 2.4465,-2.88407 5.0211,-4.12288 3.2554,-1.56646 7.0095,-2.54578 12.2408,-3.19328 2.1543,-0.26664 9.47,-0.21948 11.6809,0.0753 8.1415,1.08546 14.4594,3.74551 16.4734,6.93577 0.7936,1.25717 0.7731,0.80148 0.7731,17.22791 l 0,15.08135 -0.4466,0.0692 c -0.2456,0.038 -0.8021,0.10712 -1.2366,0.15352 -4.4834,0.47873 -9.1329,3.57818 -11.5162,7.67699 l -0.488,0.8391 -1.9169,0.0905 c -2.265,0.10697 -3.4191,0.39711 -5.1411,1.29243 -2.9567,1.53725 -5.0699,4.20232 -5.9316,7.48077 -0.238,0.90554 -0.3084,1.56192 -0.3132,2.92023 l -0.01,1.75213 -0.7594,-0.0162 c -0.4176,-0.009 -1.3777,-0.1 -2.1335,-0.20243 z m 11.7239,-20.8271 c -1.0818,-0.91805 -2.0174,-1.7137 -2.0791,-1.7681 -0.062,-0.0544 0.1631,-0.2602 0.4994,-0.45733 0.7458,-0.43708 1.7061,-1.48313 2.1139,-2.30274 0.9965,-2.00287 0.9743,-4.49403 -0.058,-6.47634 -1.135,-2.1802 -3.5103,-3.3239 -6.2014,-2.986 -1.4735,0.18503 -2.3966,0.59832 -3.3701,1.50899 -1.5366,1.4374 -2.0688,2.84774 -1.988,5.26837 0.046,1.37622 0.095,1.62372 0.4886,2.45901 0.8471,1.79787 2.6182,3.14163 4.4225,3.35531 0.6788,0.0804 0.7377,0.1249 2.0865,1.57538 l 1.3881,1.49264 2.3321,0 2.3322,0 -1.9669,-1.66919 z m -5.885,-4.6866 c -0.9451,-0.47951 -1.304,-1.30103 -1.304,-2.98527 0,-1.09589 0.053,-1.41584 0.3224,-1.96387 0.4309,-0.875 1.29,-1.40105 2.1328,-1.30604 0.829,0.0934 1.2599,0.42875 1.6984,1.32149 0.3327,0.67762 0.3808,0.93439 0.3769,2.01347 0,1.33108 -0.2403,2.01354 -0.9098,2.63622 -0.6994,0.65058 -1.42,0.73892 -2.3167,0.284 z m -9.5093,3.18974 c 2.485,-0.57319 3.8348,-2.65434 3.1192,-4.80889 -0.3603,-1.0849 -1.1219,-1.76252 -2.9819,-2.65327 -0.859,-0.41138 -1.6272,-0.83198 -1.7071,-0.93468 -0.3128,-0.40184 -0.3121,-0.66784 0,-1.03351 0.484,-0.56269 1.5858,-0.5896 3.0776,-0.0752 l 1.138,0.39245 -0.039,-1.51877 -0.039,-1.51878 -0.7558,-0.17965 c -1.143,-0.2717 -3.6136,-0.2584 -4.5856,0.0247 -1.949,0.56765 -2.976,1.84152 -2.9696,3.68323 0.01,1.89537 0.8605,2.79385 3.8676,4.06981 1.2722,0.53982 1.4179,1.54865 0.2807,1.94362 -0.5263,0.18278 -0.6761,0.17922 -1.5089,-0.0358 -0.5086,-0.13132 -1.2802,-0.42314 -1.7148,-0.64849 l -0.7902,-0.40974 0,1.64418 0,1.64418 0.7902,0.21996 c 0.4346,0.12098 0.852,0.2415 0.9276,0.26783 0.3141,0.10941 3.3435,0.0524 3.8879,-0.0732 z m 26.5512,-1.4376 0,-1.44294 -2.1988,0 -2.1987,0 0,-4.74107 0,-4.74107 -1.7865,0 -1.7865,0 0,6.18401 0,6.184 3.9853,0 3.9852,0 0,-1.44293 z m -10.5815,-24.74151 c 3.5835,-0.41532 6.5241,-1.16648 8.3827,-2.14132 1.2211,-0.64044 1.5139,-0.87116 1.9833,-1.56285 1.4515,-2.13894 -1.7987,-4.28958 -8.0986,-5.35876 -5.9187,-1.0045 -13.7186,-0.77727 -18.7108,0.54509 -10.3005,2.7285 -6.2399,7.74058 7.0717,8.7287 2.1847,0.16217 7.109,0.0514 9.3717,-0.21086 z" transform="translate(97.599 -474.268)"/>
    </svg>
  );
};
export const React = ({
  fill = 'black',
  height = '25px',
  width = '25px'
}: ISvgConfig) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"/>
    </svg>
  );
};

export const NextJS = ({
  fill = 'black',
  height = '25px',
  width = '25px'
}: ISvgConfig) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"/>
    </svg>
  );
};

export const Angular = ({
  height = '25px',
  width = '25px'
}: ISvgConfig) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2L3 7L5 24L16 30L27 24L29 7L16 2Z" fill="#DD0031"/>
      <path d="M16 2V30L27 24L29 7L16 2Z" fill="#C3002F"/>
      <path d="M15.9998 5.09375L7.87305 23.3638H10.9031L12.5368 19.2757H19.4348L21.0685 23.3638H24.0986L15.9998 5.09375ZM18.3736 16.7557H13.626L15.9998 11.0298L18.3736 16.7557Z" fill="white"/>
    </svg>
  );
};

export const NodeJs = ({ fill = 'black', height = '55px', width = '55px' }: ISvgConfig) => {
  return (
    <svg width={width} height={height} fill={fill} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.1725 2.29872C16.4627 1.89953 15.5373 1.90132 14.8269 2.29872C11.2689 4.26227 7.71082 6.22641 4.15216 8.18906C3.45969 8.55335 2.99264 9.29698 3.00009 10.0688V21.9328C2.99509 22.7197 3.48622 23.4705 4.19655 23.8298C5.21871 24.3736 6.2118 24.9726 7.25244 25.4802C8.45451 26.0709 9.95843 26.2015 11.1752 25.5855C12.1629 25.075 12.6016 23.9395 12.6003 22.896C12.6083 18.9806 12.6016 15.0651 12.6034 11.1496C12.6269 10.9756 12.4962 10.7896 12.3064 10.7938C11.8517 10.7866 11.3964 10.7896 10.9417 10.7926C10.7699 10.7764 10.6022 10.9191 10.6152 11.0918C10.6091 14.982 10.6164 18.8734 10.6115 22.7642C10.6214 23.3024 10.2578 23.8196 9.73913 24.0014C8.5412 24.4213 5.12198 22.2012 5.12198 22.2012C4.9965 22.1431 4.91682 22.007 4.92912 21.8718C4.92912 17.9576 4.92973 14.0433 4.92912 10.1297C4.91187 9.97191 5.00912 9.8298 5.15402 9.76538C8.70033 7.8134 12.2448 5.85654 15.7911 3.90336C15.9143 3.82115 16.086 3.8214 16.2089 3.90396C19.7552 5.85654 23.3003 7.81161 26.8472 9.76368C26.9926 9.828 27.0857 9.9725 27.0709 10.1297C27.0703 14.0433 27.0721 17.9576 27.0697 21.8713C27.0802 22.0098 27.0086 22.144 26.8793 22.2048C23.3661 24.1462 19.8129 26.025 16.3315 28.0228C16.1796 28.1099 16.0075 28.2086 15.8373 28.1126C14.9218 27.6062 14.0174 27.0801 13.1049 26.5688C13.0057 26.5069 12.8794 26.4803 12.7759 26.5496C12.3668 26.7652 11.982 26.9398 11.5122 27.1258C10.8524 27.387 10.9578 27.4938 11.5529 27.8405C12.62 28.4444 13.6889 29.0459 14.756 29.6504C15.4585 30.0888 16.4024 30.12 17.1275 29.7149C20.6861 27.7538 24.2436 25.7904 27.8029 23.8293C28.5113 23.468 29.0049 22.7202 28.9999 21.9327V10.0688C29.0068 9.31264 28.5576 8.58227 27.886 8.21259C24.3156 6.23947 20.7435 4.27064 17.1725 2.29872Z" fill="#8CC84B"/>
      <path d="M22.5419 11.2062C21.1452 10.459 19.4836 10.4192 17.9315 10.5169C16.8102 10.6277 15.6309 10.9371 14.814 11.7409C13.9761 12.5489 13.7937 13.8537 14.1917 14.9085C14.4769 15.6539 15.1948 16.1386 15.9372 16.395C16.8935 16.7326 17.8979 16.837 18.9026 16.9414C19.819 17.0366 20.7357 17.1319 21.6165 17.4042C21.9763 17.5234 22.3953 17.7058 22.5055 18.0973C22.6073 18.5609 22.4957 19.0998 22.1193 19.4219C20.9237 20.3682 17.5979 20.2232 16.4166 19.4784C15.939 19.1611 15.7332 18.5994 15.6495 18.0641C15.6402 17.8973 15.5059 17.7443 15.3248 17.757C14.8713 17.7516 14.4178 17.7528 13.9643 17.7564C13.8061 17.7431 13.6416 17.8557 13.6329 18.0172C13.5397 20.4689 15.7914 21.5377 17.9039 21.773C19.1108 21.888 20.3442 21.8814 21.5327 21.6224C22.4261 21.419 23.3219 21.0444 23.9369 20.3563C24.6953 19.52 24.8444 18.2749 24.5043 17.2332C24.2443 16.4559 23.5012 15.9573 22.7416 15.7008C21.7086 15.3466 20.4844 15.1562 19.5488 15.0671C18.1889 14.9376 16.5729 14.9905 16.188 14.0969C16.0345 13.629 16.1651 13.048 16.5951 12.7602C17.7328 11.9885 20.0483 12.091 21.2265 12.6675C21.7675 12.9384 22.081 13.4948 22.2104 14.0565C22.2344 14.2215 22.3454 14.3937 22.5364 14.3865C22.9868 14.3955 23.4372 14.3889 23.8875 14.3895C24.0422 14.4003 24.2116 14.313 24.2418 14.1546C24.2227 12.9806 23.6232 11.7788 22.5419 11.2062Z" fill="#8CC84B"/>
    </svg>
  );
};

export const NestJs = ({ height = '55px', width = '55px' }: ISvgConfig) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.487,2a1.781,1.781,0,0,0-.564.1c1.615,1.062-.29,2.6.6,3.9A2.235,2.235,0,0,1,19.6,3.765c.285-.237.468-.322.407-.714C19.908,2.409,19.052,2,18.487,2Zm2.3.414c-.223,1.123-.5,1.164-1.323,1.887a1.821,1.821,0,0,0-.527,2.191c-3.4-1.32-7.758-2.118-10.953.166-1.149.821-1.85,2-3.267,2.481-.916.314-1.816.221-2.39,1.129A1.413,1.413,0,0,0,2.383,12.1c.171.175.5.287.636.465.079.1.077.2.152.333a2.6,2.6,0,0,0,.564.828c.147.121.652.239.738.368.108.161-.172.8.063.9.158.073.621-.744.666-.816-.092.643-.213,1.784.51.834.343-.451.364-.6.941-.7a8.2,8.2,0,0,1,1.117-.116,8.362,8.362,0,0,1,8.622,7.622c-.108-.5-.761-1.3-1.369-1.11-.259.08-.355.527-.525.786a3.773,3.773,0,0,1-.785.868,4.687,4.687,0,0,0-.072-1.452c-.182.748-.547,1.989-1.466,1.788a1.652,1.652,0,0,1-1.328-1.142c-.119-.76.684-1.651-.607-1.714-2.59-.127-1.991,3.682-.462,4.675a3.272,3.272,0,0,0-1.015.283,6.893,6.893,0,0,0,10.276-4.922,7.058,7.058,0,0,1-.015,3.085,7.213,7.213,0,0,1-.554,1.559,6.781,6.781,0,0,1-1.3,1.81c-.314.311-.89.624-1.088.941a13.409,13.409,0,0,0,3.52-.968A11.638,11.638,0,0,1,15.1,30a11.589,11.589,0,0,0,9.3-5.909,11.657,11.657,0,0,1-1.945,4.668,11.531,11.531,0,0,0,4.975-7.783,11.622,11.622,0,0,1,.209,3.5A12.418,12.418,0,0,0,29.528,13.91a15.755,15.755,0,0,0-1.689-3.962A14.838,14.838,0,0,0,26.9,8.554c-.133-.173-.844-.806-.844-1q-.009.029-.015,0c0,3.248-3.5,5.333-6.431,4.463A5,5,0,0,0,24.156,7.85,5,5,0,0,0,20.787,2.414Z"
        fill="#ea2845"
        fillRule='evenodd'
      />
    </svg>
  );
};

export const Sass = ({ height = '55px', width = '55px' }: ISvgConfig) => {
  return (
    <svg width={width} height={height} viewBox="0 -32 256 256" xmlns="http://www.w3.org/2000/svg">
      <g fill="#CD6799">
        <path d="M220.281239,110.513661 C211.374863,110.560291 203.634244,112.705282 197.152641,115.876138 C194.774499,111.166485 192.396357,106.969763 191.976685,103.892168 C191.510383,100.301639 190.95082,98.1100182 191.510383,93.8200364 C192.069945,89.5300546 194.587978,83.4214936 194.541348,82.9551913 C194.494718,82.4888889 193.981785,80.2972678 188.852459,80.2506375 C183.723133,80.2040073 179.29326,81.2298725 178.780328,82.5821494 C178.267395,83.9344262 177.28816,87.0120219 176.635337,90.182878 C175.749362,94.8459016 166.376685,111.492896 161.014208,120.21275 C159.288889,116.808743 157.796721,113.824408 157.47031,111.446266 C157.004007,107.855738 156.444444,105.664117 157.004007,101.374135 C157.56357,97.084153 160.081603,90.975592 160.034973,90.5092896 C159.988342,90.0429872 159.47541,87.8513661 154.346084,87.8047359 C149.216758,87.7581056 144.786885,88.7839709 144.273953,90.1362477 C143.76102,91.4885246 143.201457,94.6593807 142.128962,97.7369763 C141.056466,100.814572 128.606193,128.606193 125.342077,135.78725 C123.663388,139.471038 122.217851,142.408743 121.191985,144.413843 L121.191985,144.413843 C121.191985,144.413843 121.145355,144.553734 121.005464,144.786885 C120.11949,146.512204 119.606557,147.444809 119.606557,147.444809 C119.606557,147.444809 119.606557,147.444809 119.606557,147.491439 C118.907104,148.750455 118.16102,149.916211 117.787978,149.916211 C117.508197,149.916211 116.995264,146.558834 117.881239,141.989071 C119.746448,132.336612 124.176321,117.321676 124.12969,116.808743 C124.12969,116.528962 124.969035,113.917668 121.238616,112.565392 C117.601457,111.213115 116.295811,113.451366 115.969399,113.451366 C115.642987,113.451366 115.409836,114.24408 115.409836,114.24408 C115.409836,114.24408 119.466667,97.3639344 107.669217,97.3639344 C100.301639,97.3639344 90.1362477,105.430965 85.1001821,112.705282 C81.929326,114.430601 75.1679417,118.11439 67.940255,122.07796 C65.189071,123.616758 62.3446266,125.155556 59.6867031,126.601093 C59.5001821,126.414572 59.3136612,126.181421 59.1271403,125.9949 C44.8582878,110.746812 18.4655738,99.9752277 19.5846995,79.5045537 C20.0043716,72.0437158 22.5690346,52.4590164 70.2717668,28.6775956 C109.534426,9.32604736 140.776685,14.6885246 146.185792,26.579235 C153.926412,43.5526412 129.445537,75.0746812 88.8772313,79.6444444 C73.3959927,81.3697632 65.2823315,75.4010929 63.2306011,73.1628415 C61.0856102,70.8313297 60.7591985,70.691439 59.9664845,71.1577413 C58.6608379,71.8571949 59.5001821,73.9555556 59.9664845,75.1679417 C61.1788707,78.3387978 66.168306,83.9344262 74.6083789,86.6856102 C82.0692168,89.1103825 100.208379,90.4626594 122.17122,81.9759563 C146.745355,72.463388 165.957013,46.0240437 160.314754,23.8746812 C154.672495,1.3989071 117.368306,-6.01530055 82.0692168,6.52823315 C61.0856102,13.989071 38.3300546,25.7398907 21.9628415,41.0346084 C2.51803279,59.2204007 -0.559562842,75.028051 0.699453552,81.6495446 C5.22258652,105.151184 37.6306011,120.445902 50.5938069,131.777049 C49.9409836,132.150091 49.3347905,132.476503 48.8218579,132.756284 C42.340255,135.97377 17.6262295,148.890346 11.4710383,162.553005 C4.47650273,178.034244 12.5901639,189.13224 17.9526412,190.624408 C34.5996357,195.240801 51.7129326,186.940619 60.8990893,173.23133 C70.0852459,159.52204 68.9661202,141.70929 64.7227687,133.548998 C64.6761384,133.455738 64.6295082,133.362477 64.5362477,133.269217 C66.2149362,132.289982 67.940255,131.264117 69.6189435,130.284882 C72.9296903,128.326412 76.1938069,126.507832 78.9916211,125.015665 C77.4061931,129.352277 76.2404372,134.528233 75.6808743,141.989071 C74.9814208,150.755556 78.571949,162.133333 83.2816029,166.609836 C85.3799636,168.568306 87.8513661,168.614936 89.4367942,168.614936 C94.9391621,168.614936 97.4105647,164.045173 100.161749,158.636066 C103.519126,152.014572 106.550091,144.320583 106.550091,144.320583 C106.550091,144.320583 102.773042,165.117668 113.031694,165.117668 C116.762113,165.117668 120.539162,160.268124 122.217851,157.796721 L122.217851,157.843352 C122.217851,157.843352 122.311111,157.703461 122.497632,157.377049 C122.870674,156.770856 123.103825,156.397814 123.103825,156.397814 L123.103825,156.304554 C124.595993,153.69326 127.95337,147.77122 132.942805,137.93224 C139.377778,125.248816 145.579599,109.394536 145.579599,109.394536 C145.579599,109.394536 146.139162,113.264845 148.051002,119.699818 C149.170128,123.476867 151.501639,127.626958 153.366849,131.637158 C151.874681,133.735519 150.942077,134.901275 150.942077,134.901275 C150.942077,134.901275 150.942077,134.901275 150.988707,134.947905 C149.776321,136.533333 148.470674,138.258652 147.025137,139.937341 C141.942441,145.999271 135.88051,152.947177 135.041166,154.952277 C134.061931,157.330419 134.295082,159.055738 136.160291,160.454645 C137.512568,161.48051 139.937341,161.620401 142.408743,161.48051 C146.978506,161.154098 150.195993,160.034973 151.781421,159.335519 C154.252823,158.449545 157.143898,157.097268 159.848452,155.092168 C164.837887,151.408379 167.868852,146.139162 167.589071,139.191257 C167.44918,135.367577 166.190164,131.543898 164.651366,127.95337 C165.117668,127.300546 165.537341,126.647723 166.003643,125.9949 C173.884153,114.477231 179.992714,101.840437 179.992714,101.840437 C179.992714,101.840437 180.552277,105.710747 182.464117,112.145719 C183.396721,115.409836 185.308561,118.953734 186.98725,122.404372 C179.573042,128.419672 175.003279,135.414208 173.37122,139.983971 C170.433515,148.470674 172.718397,152.294353 177.055009,153.180328 C179.013479,153.6 181.811293,152.667395 183.863024,151.781421 C186.474317,150.942077 189.551913,149.496539 192.489617,147.351548 C197.479053,143.66776 202.281967,138.538434 202.002186,131.590528 C201.862295,128.419672 201.022951,125.295446 199.857195,122.264481 C206.152277,119.653188 214.265938,118.20765 224.617851,119.420036 C246.813843,122.03133 251.197086,135.88051 250.357741,141.70929 C249.518397,147.538069 244.855373,150.708925 243.316576,151.68816 C241.777778,152.667395 241.264845,152.993807 241.404736,153.69326 C241.591257,154.719126 242.337341,154.672495 243.642987,154.485974 C245.461566,154.159563 255.300546,149.776321 255.720219,139.051366 C256.419672,125.342077 243.363206,110.37377 220.281239,110.513661 L220.281239,110.513661 Z M49.0550091,168.241894 C41.6874317,176.262295 31.4287796,179.29326 26.9989071,176.728597 C22.242623,173.977413 24.1078324,162.133333 33.1540984,153.64663 C38.6564663,148.470674 45.7442623,143.66776 50.4539162,140.730055 C51.5264117,140.077231 53.1118397,139.144627 55.0236794,137.978871 C55.3500911,137.79235 55.536612,137.699089 55.536612,137.699089 L55.536612,137.699089 C55.9096539,137.465938 56.2826958,137.232787 56.6557377,136.999636 C59.9664845,149.123497 56.7956284,159.801821 49.0550091,168.241894 L49.0550091,168.241894 Z M102.679781,131.777049 C100.115118,138.025501 94.7526412,154.019672 91.4885246,153.133698 C88.6907104,152.387614 86.9653916,140.263752 90.9289617,128.279781 C92.9340619,122.264481 97.1774135,115.083424 99.648816,112.28561 C103.659016,107.809107 108.088889,106.31694 109.161384,108.135519 C110.513661,110.513661 104.265209,127.860109 102.679781,131.777049 L102.679781,131.777049 Z M146.931876,152.947177 C145.859381,153.50674 144.833515,153.879781 144.367213,153.6 C144.040801,153.413479 144.833515,152.667395 144.833515,152.667395 C144.833515,152.667395 150.382514,146.698725 152.574135,143.994171 C153.833151,142.408743 155.325319,140.543534 156.910747,138.445173 L156.910747,139.051366 C156.910747,146.185792 150.009472,150.988707 146.931876,152.947177 L146.931876,152.947177 Z M181.065209,145.159927 C180.272495,144.600364 180.412386,142.735155 183.07031,136.906375 C184.096175,134.621494 186.520947,130.797814 190.671038,127.114026 C191.137341,128.606193 191.463752,130.05173 191.417122,131.404007 C191.370492,140.403643 184.935519,143.76102 181.065209,145.159927 L181.065209,145.159927 Z">
        </path>
      </g>
    </svg>
  );
};

export const Git = ({ height = '55px', width = '55px' }: ISvgConfig) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.58536 17.4132C1.80488 16.6327 1.80488 15.3673 2.58536 14.5868L14.5868 2.58536C15.3673 1.80488 16.6327 1.80488 17.4132 2.58536L29.4146 14.5868C30.1951 15.3673 30.1951 16.6327 29.4146 17.4132L17.4132 29.4146C16.6327 30.1951 15.3673 30.1951 14.5868 29.4146L2.58536 17.4132Z" fill="#EE513B"/>
      <path d="M12.1489 5.06152L10.9336 6.27686L14.0725 9.41577C13.9455 9.68819 13.8746 9.99201 13.8746 10.3124C13.8746 11.222 14.4461 11.9981 15.2496 12.3012V19.9798C14.4461 20.2829 13.8746 21.059 13.8746 21.9686C13.8746 23.1422 14.826 24.0936 15.9996 24.0936C17.1732 24.0936 18.1246 23.1422 18.1246 21.9686C18.1246 21.144 17.6549 20.429 16.9684 20.0768V12.3117L19.9689 15.3122C19.8481 15.5791 19.7809 15.8754 19.7809 16.1874C19.7809 17.361 20.7323 18.3124 21.9059 18.3124C23.0795 18.3124 24.0309 17.361 24.0309 16.1874C24.0309 15.0138 23.0795 14.0624 21.9059 14.0624C21.6778 14.0624 21.4582 14.0983 21.2522 14.1648L18.0297 10.9423C18.0914 10.7433 18.1246 10.5317 18.1246 10.3124C18.1246 9.13878 17.1732 8.18738 15.9996 8.18738C15.7803 8.18738 15.5688 8.22061 15.3697 8.2823L12.1489 5.06152Z" fill="white"/>
    </svg>
  );
};

export const Docker = ({ height = '55px', width = '55px' }: ISvgConfig) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path fill="#2396ED" d="M12.342 4.536l.15-.227.262.159.116.083c.28.216.869.768.996 1.684.223-.04.448-.06.673-.06.534 0 .893.124 1.097.227l.105.057.068.045.191.156-.066.2a2.044 2.044 0 01-.47.73c-.29.299-.8.652-1.609.698l-.178.005h-.148c-.37.977-.867 2.078-1.702 3.066a7.081 7.081 0 01-1.74 1.488 7.941 7.941 0 01-2.549.968c-.644.125-1.298.187-1.953.185-1.45 0-2.73-.288-3.517-.792-.703-.449-1.243-1.182-1.606-2.177a8.25 8.25 0 01-.461-2.83.516.516 0 01.432-.516l.068-.005h10.54l.092-.007.149-.016c.256-.034.646-.11.92-.27-.328-.543-.421-1.178-.268-1.854a3.3 3.3 0 01.3-.81l.108-.187zM2.89 5.784l.04.007a.127.127 0 01.077.082l.006.04v1.315l-.006.041a.127.127 0 01-.078.082l-.039.006H1.478a.124.124 0 01-.117-.088l-.007-.04V5.912l.007-.04a.127.127 0 01.078-.083l.039-.006H2.89zm1.947 0l.039.007a.127.127 0 01.078.082l.006.04v1.315l-.007.041a.127.127 0 01-.078.082l-.039.006H3.424a.125.125 0 01-.117-.088L3.3 7.23V5.913a.13.13 0 01.085-.123l.039-.007h1.413zm1.976 0l.039.007a.127.127 0 01.077.082l.007.04v1.315l-.007.041a.127.127 0 01-.078.082l-.039.006H5.4a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.039-.006h1.413zm1.952 0l.039.007a.127.127 0 01.078.082l.007.04v1.315a.13.13 0 01-.085.123l-.04.006H7.353a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.04-.006h1.412zm1.97 0l.039.007a.127.127 0 01.078.082l.006.04v1.315a.13.13 0 01-.085.123l-.039.006H9.322a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.04-.006h1.411zM4.835 3.892l.04.007a.127.127 0 01.077.081l.007.041v1.315a.13.13 0 01-.085.123l-.039.007H3.424a.125.125 0 01-.117-.09l-.007-.04V4.021a.13.13 0 01.085-.122l.039-.007h1.412zm1.976 0l.04.007a.127.127 0 01.077.081l.007.041v1.315a.13.13 0 01-.085.123l-.039.007H5.4a.125.125 0 01-.117-.09l-.006-.04V4.021l.006-.04a.127.127 0 01.078-.082l.039-.007h1.412zm1.953 0c.054 0 .1.037.117.088l.007.041v1.315a.13.13 0 01-.085.123l-.04.007H7.353a.125.125 0 01-.117-.09l-.006-.04V4.021l.006-.04a.127.127 0 01.078-.082l.04-.007h1.412zm0-1.892c.054 0 .1.037.117.088l.007.04v1.316a.13.13 0 01-.085.123l-.04.006H7.353a.124.124 0 01-.117-.088l-.006-.04V2.128l.006-.04a.127.127 0 01.078-.082L7.353 2h1.412z"/>
    </svg>
  );
};

