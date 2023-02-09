import { FC, MouseEventHandler, useState } from 'react';

type Props = {
  width: number;
  height: number;
  onClick: MouseEventHandler<SVGSVGElement>;
};

const InteractiveMenuIcon: FC<Props> = ({ width, height, onClick }) => {
  const [middlePathDValue, setMiddlePathDValue] = useState('M.986,7.986h20');

  const alignLines = () => {
    setMiddlePathDValue('M6.986,7.986h20');
  };

  const dealignLines = () => {
    setMiddlePathDValue('M.986,7.986h20');
  };

  return (
    <svg
      width="753"
      height="354"
      viewBox="0 0 753 354"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M213.577 282.323C213.577 274.834 215.075 268.313 218.071 262.762C221.067 257.122 225.208 252.761 230.495 249.677C235.87 246.592 241.994 245.05 248.867 245.05C257.767 245.05 265.08 247.209 270.808 251.527C276.624 255.845 280.457 261.837 282.307 269.503H269.354C268.12 265.097 265.697 261.616 262.084 259.061C258.56 256.506 254.154 255.228 248.867 255.228C241.994 255.228 236.443 257.607 232.213 262.365C227.984 267.035 225.869 273.688 225.869 282.323C225.869 291.047 227.984 297.788 232.213 302.546C236.443 307.304 241.994 309.683 248.867 309.683C254.154 309.683 258.56 308.45 262.084 305.983C265.609 303.515 268.032 299.991 269.354 295.409H282.307C280.369 302.81 276.491 308.758 270.676 313.252C264.86 317.658 257.591 319.861 248.867 319.861C241.994 319.861 235.87 318.319 230.495 315.235C225.208 312.151 221.067 307.789 218.071 302.15C215.075 296.51 213.577 289.901 213.577 282.323Z"
        fill="#383838"
      />
      <path
        d="M329.945 319.861C323.161 319.861 316.992 318.319 311.441 315.235C305.978 312.151 301.66 307.789 298.488 302.15C295.404 296.422 293.862 289.813 293.862 282.323C293.862 274.922 295.448 268.401 298.62 262.762C301.881 257.034 306.286 252.672 311.838 249.677C317.389 246.592 323.601 245.05 330.474 245.05C337.347 245.05 343.559 246.592 349.111 249.677C354.662 252.672 359.024 256.99 362.196 262.63C365.456 268.269 367.086 274.834 367.086 282.323C367.086 289.813 365.412 296.422 362.064 302.15C358.803 307.789 354.354 312.151 348.714 315.235C343.075 318.319 336.819 319.861 329.945 319.861ZM329.945 309.287C334.263 309.287 338.316 308.274 342.105 306.247C345.894 304.22 348.934 301.18 351.225 297.127C353.605 293.074 354.794 288.139 354.794 282.323C354.794 276.508 353.649 271.573 351.358 267.52C349.067 263.467 346.071 260.471 342.37 258.532C338.669 256.506 334.66 255.492 330.342 255.492C325.936 255.492 321.883 256.506 318.182 258.532C314.569 260.471 311.661 263.467 309.459 267.52C307.256 271.573 306.154 276.508 306.154 282.323C306.154 288.227 307.212 293.206 309.326 297.259C311.529 301.312 314.437 304.352 318.05 306.379C321.663 308.318 325.628 309.287 329.945 309.287Z"
        fill="#383838"
      />
      <path
        d="M418.191 244.918C427.003 244.918 434.14 247.606 439.603 252.981C445.067 258.268 447.798 265.934 447.798 275.979V318.671H435.902V277.697C435.902 270.472 434.096 264.965 430.483 261.176C426.871 257.299 421.936 255.36 415.68 255.36C409.336 255.36 404.269 257.343 400.48 261.308C396.779 265.273 394.929 271.045 394.929 278.623V318.671H382.901V246.24H394.929V256.55C397.308 252.849 400.524 249.985 404.577 247.958C408.719 245.932 413.257 244.918 418.191 244.918Z"
        fill="#383838"
      />
      <path
        d="M462.952 282.323C462.952 274.834 464.45 268.313 467.446 262.762C470.442 257.122 474.583 252.761 479.87 249.677C485.245 246.592 491.369 245.05 498.242 245.05C507.142 245.05 514.455 247.209 520.183 251.527C525.999 255.845 529.832 261.837 531.682 269.503H518.729C517.495 265.097 515.072 261.616 511.459 259.061C507.935 256.506 503.529 255.228 498.242 255.228C491.369 255.228 485.818 257.607 481.588 262.365C477.359 267.035 475.244 273.688 475.244 282.323C475.244 291.047 477.359 297.788 481.588 302.546C485.818 307.304 491.369 309.683 498.242 309.683C503.529 309.683 507.935 308.45 511.459 305.983C514.984 303.515 517.407 299.991 518.729 295.409H531.682C529.744 302.81 525.866 308.758 520.051 313.252C514.235 317.658 506.966 319.861 498.242 319.861C491.369 319.861 485.245 318.319 479.87 315.235C474.583 312.151 470.442 307.789 467.446 302.15C464.45 296.51 462.952 289.901 462.952 282.323Z"
        fill="#383838"
      />
      <path
        d="M613.818 279.68C613.818 281.971 613.686 284.394 613.421 286.95H555.529C555.97 294.087 558.393 299.682 562.799 303.736C567.293 307.701 572.712 309.683 579.056 309.683C584.255 309.683 588.573 308.494 592.009 306.115C595.534 303.648 598.001 300.387 599.411 296.334H612.364C610.425 303.295 606.548 308.979 600.733 313.384C594.917 317.702 587.691 319.861 579.056 319.861C572.183 319.861 566.015 318.319 560.552 315.235C555.177 312.151 550.947 307.789 547.863 302.15C544.779 296.422 543.237 289.813 543.237 282.323C543.237 274.834 544.735 268.269 547.731 262.63C550.727 256.99 554.912 252.672 560.287 249.677C565.751 246.592 572.007 245.05 579.056 245.05C585.929 245.05 592.009 246.548 597.296 249.544C602.583 252.54 606.636 256.682 609.456 261.969C612.364 267.168 613.818 273.071 613.818 279.68ZM601.393 277.169C601.393 272.587 600.38 268.666 598.353 265.405C596.327 262.057 593.551 259.546 590.026 257.871C586.59 256.109 582.757 255.228 578.527 255.228C572.447 255.228 567.249 257.166 562.931 261.043C558.701 264.921 556.278 270.296 555.661 277.169H601.393Z"
        fill="#383838"
      />
      <path
        d="M641.722 259.59C644.101 255.448 647.626 252.012 652.296 249.28C657.054 246.46 662.561 245.05 668.818 245.05C675.25 245.05 681.066 246.592 686.265 249.677C691.552 252.761 695.693 257.122 698.689 262.762C701.685 268.313 703.183 274.79 703.183 282.191C703.183 289.505 701.685 296.026 698.689 301.753C695.693 307.481 691.552 311.93 686.265 315.103C681.066 318.275 675.25 319.861 668.818 319.861C662.65 319.861 657.186 318.495 652.428 315.763C647.758 312.944 644.189 309.463 641.722 305.322V353.037H629.694V246.24H641.722V259.59ZM690.891 282.191C690.891 276.728 689.789 271.97 687.586 267.917C685.383 263.863 682.387 260.779 678.599 258.664C674.898 256.55 670.8 255.492 666.306 255.492C661.901 255.492 657.803 256.594 654.014 258.797C650.313 260.911 647.317 264.039 645.026 268.181C642.823 272.234 641.722 276.948 641.722 282.323C641.722 287.787 642.823 292.589 645.026 296.73C647.317 300.784 650.313 303.912 654.014 306.115C657.803 308.23 661.901 309.287 666.306 309.287C670.8 309.287 674.898 308.23 678.599 306.115C682.387 303.912 685.383 300.784 687.586 296.73C689.789 292.589 690.891 287.743 690.891 282.191Z"
        fill="#383838"
      />
      <path
        d="M733.686 256.153V298.845C733.686 302.37 734.435 304.881 735.933 306.379C737.431 307.789 740.031 308.494 743.731 308.494H752.587V318.671H741.749C735.052 318.671 730.029 317.129 726.681 314.045C723.333 310.961 721.658 305.895 721.658 298.845V256.153H712.274V246.24H721.658V228H733.686V246.24H752.587V256.153H733.686Z"
        fill="#383838"
      />
      <path
        d="M114.496 158.194C114.496 143.776 107.428 134.447 93.7168 134.447C84.3875 134.447 76.7545 140.666 68.9801 151.126C67.0012 140.807 60.0749 134.447 48.908 134.447C39.7201 134.447 32.3698 140.383 24.7367 150.278V134.305H22.7578L0 141.797V143.776C6.21952 143.069 9.04657 144.624 9.04657 151.833V196.783C9.04657 202.437 6.92628 204.699 0 205.83V207.809H33.7833V205.83C26.9984 204.699 24.7367 202.437 24.7367 196.783V154.095C30.3908 148.158 34.7728 144.765 41.1336 144.765C48.908 144.765 53.9967 150.278 53.9967 159.042V196.783C53.9967 202.437 51.7351 204.699 44.9501 205.83V207.809H78.7334V205.83C71.8072 204.699 69.6869 202.437 69.6869 196.783V158.194C69.6869 156.922 69.6869 155.649 69.5455 154.377C75.0583 148.158 79.7229 144.765 85.9424 144.765C93.8582 144.765 98.8055 150.278 98.8055 159.042V196.783C98.8055 202.437 96.6852 204.699 89.7589 205.83V207.809H123.542V205.83C116.757 204.699 114.496 202.437 114.496 196.783V158.194Z"
        fill="#383838"
      />
      <path
        d="M164.142 209.929C185.345 209.929 199.763 194.097 199.763 170.633C199.763 149.147 185.769 134.305 165.273 134.305C144.212 134.305 129.652 150.278 129.652 173.743C129.652 195.228 143.646 209.929 164.142 209.929ZM167.818 205.971C154.248 205.971 145.767 183.072 145.767 163.565C145.767 148.723 151.845 138.263 161.598 138.263C175.168 138.263 183.79 161.304 183.79 181.093C183.79 195.794 177.571 205.971 167.818 205.971Z"
        fill="#383838"
      />
      <path
        d="M238.551 209.929C254.807 209.929 264.136 200.034 264.136 188.867C264.136 159.042 223.144 167.523 223.144 149.289C223.144 142.645 228.657 138.263 235.583 138.263C245.195 138.263 254.1 145.613 259.472 157.487H261.451L257.917 134.305H255.938C255.655 146.037 248.87 134.305 234.593 134.305C221.306 134.305 210.988 142.504 210.988 154.943C210.988 182.789 251.839 173.743 251.839 194.239C251.839 201.306 246.043 205.83 238.269 205.83C227.95 205.83 217.914 198.055 212.401 184.485H210.422L214.38 209.929H216.359C217.914 197.914 222.579 209.929 238.551 209.929Z"
        fill="#383838"
      />
      <path
        d="M302.878 209.929C319.133 209.929 328.463 200.034 328.463 188.867C328.463 159.042 287.47 167.523 287.47 149.289C287.47 142.645 292.983 138.263 299.909 138.263C309.521 138.263 318.427 145.613 323.798 157.487H325.777L322.243 134.305H320.264C319.982 146.037 313.197 134.305 298.92 134.305C285.633 134.305 275.314 142.504 275.314 154.943C275.314 182.789 316.165 173.743 316.165 194.239C316.165 201.306 310.37 205.83 302.595 205.83C292.276 205.83 282.24 198.055 276.728 184.485H274.749L278.707 209.929H280.685C282.24 197.914 286.905 209.929 302.878 209.929Z"
        fill="#383838"
      />
      <path
        d="M232.742 35.2904V77.9826C232.742 81.5072 233.491 84.0185 234.989 85.5165C236.487 86.9264 239.086 87.6313 242.787 87.6313H251.643V97.8087H240.804C234.108 97.8087 229.085 96.2667 225.737 93.1826C222.388 90.0986 220.714 85.0319 220.714 77.9826V35.2904H211.33V25.3774H220.714V7.13739H232.742V25.3774H251.643V35.2904H232.742Z"
        fill="#383838"
      />
      <path
        d="M302.167 24.0556C307.63 24.0556 312.565 25.2452 316.971 27.6243C321.376 29.9154 324.813 33.3959 327.28 38.0661C329.836 42.7362 331.113 48.4197 331.113 55.1165V97.8087H319.218V56.8348C319.218 49.6093 317.411 44.102 313.798 40.313C310.186 36.4359 305.251 34.4974 298.995 34.4974C292.651 34.4974 287.584 36.48 283.795 40.4452C280.094 44.4104 278.244 50.182 278.244 57.76V97.8087H266.216V0H278.244V35.687C280.623 31.9861 283.883 29.1223 288.025 27.0956C292.254 25.069 296.968 24.0556 302.167 24.0556Z"
        fill="#383838"
      />
      <path
        d="M416.848 58.8174C416.848 61.1084 416.715 63.5316 416.451 66.087H358.559C358.999 73.2243 361.423 78.8197 365.828 82.873C370.322 86.8383 375.742 88.8209 382.086 88.8209C387.285 88.8209 391.602 87.6313 395.039 85.2522C398.564 82.7849 401.031 79.5246 402.441 75.4713H415.394C413.455 82.4325 409.578 88.1159 403.762 92.5217C397.947 96.8394 390.721 98.9983 382.086 98.9983C375.213 98.9983 369.045 97.4562 363.582 94.3722C358.206 91.2881 353.977 86.9264 350.893 81.287C347.809 75.5594 346.267 68.9507 346.267 61.4609C346.267 53.971 347.765 47.4064 350.761 41.767C353.757 36.1275 357.942 31.8098 363.317 28.8139C368.78 25.7298 375.037 24.1878 382.086 24.1878C388.959 24.1878 395.039 25.6858 400.326 28.6817C405.613 31.6777 409.666 35.8191 412.486 41.1061C415.394 46.3049 416.848 52.2087 416.848 58.8174ZM404.423 56.3061C404.423 51.7241 403.41 47.8029 401.383 44.5426C399.357 41.1942 396.581 38.6829 393.056 37.0087C389.62 35.2464 385.787 34.3652 381.557 34.3652C375.477 34.3652 370.278 36.3038 365.961 40.1809C361.731 44.058 359.308 49.433 358.691 56.3061H404.423Z"
        fill="#383838"
      />
    </svg>
  );
};

export default InteractiveMenuIcon;