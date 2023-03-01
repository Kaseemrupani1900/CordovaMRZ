# CordovaMRZ

Accura Scan OCR is used for Optical character recognition.

Accura Scan Face Match is used for Matching 2 Faces, Source face and Target face. It matches the User Image from a Selfie vs User Image in document.

Accura Scan Authentication is used for your customer verification and authentication. Unlock the True Identity of Your Users with 3D Selfie Technology

Below steps to setup Accura Scan's SDK to your project.

# Add Android Or iOS Platform
```
$ cordova platform add android@9.1.0
$ cordova platform add ios
```

# Add Cordova MRZ Plugin
```
$ cordova plugin add cordova-mrz-demo
```
# Add Dependencies

```
$ cordova plugin add cordova-plugin-file

$ cordova plugin add cordova-plugin-whitelist

$ cordova plugin add cordova-plugin-add-swift-support
```

# 1.Setup Android

Step 1: Add it in your root build.gradle at the end of repositories.

```
allprojects {
    repositories {
        ...
        maven {
            url 'https://jitpack.io'
            credentials { username "jp_ssguccab6c5ge2l4jitaj92ek2" }
        }
    }
}
```

Step 2: Update "defaultTargetSdkVersion" And "defaultCompileSdkVersion" in your root build.gradle
```
      defaultTargetSdkVersion=31 
      defaultCompileSdkVersion=31 
```

# Run Cordova Build Command

`$ cordova build`

# 2.Setup AccuraScan Licenses Into Your Projects

Generate your Accura license from ***https://accurascan.com/developer/dashboard***

### 1: License Path For Android ###
```
platforms/android/app/src/main/assets/key.license
```
Replace Your Licenses In These Locations.

### 2: License Path For iOS ###
```
Place Both The License In Your "Resources" Folder, And Add The License To The Target.
```

# javascript(index.js)

## Plugin access in Javascript
`cordova.plugins.ACCURAService`

In your cordova javascript event get plugin

```
document.addEventListener('deviceready', onDeviceReady, false);

var accura;

function onDeviceReady() {

     // Cordova is now initialized.

     accura = cordova.plugins.CordovaMRZPlugin;

}
```

# 3.Get License Configuration From SDK. It Returns All Active Functionalities Of Your License.
### Setting up License
```
function getMetadata() {
    accura.getMetadata(function(result) {
        if (result["isValid"]) {
            alert("License Loaded " + result["sdkVersion"]);
            $("#main-div").fadeIn();

            if (result["isMRZ"]) {
                $("#mrz-div").fadeIn();
                for (let i = 0; i < mrzNames.length; i++) {
                    $("#tables").append(
                        "<thead class='mrz-head'><th><button class='btn btn-round' style='width:100%;height:50px;background-color: #818589;color: white;font-size: 20px;' onclick='startMRZ(this.value)' value='" + mrzTypes[i] + "'>" + mrzNames[i] + "</button></th></tr></thead>"
                    )
                }
            }
        }
    }, function (error) {
        alert(error)
    });
}
```

Success: JSON Response = {

isMRZ: boolean,

sdkVersion: String

}

Error: String

### Setting Up Configuration's, Error Messages And Scaning Title Messages

```
function setupAccuraConfig() {
    if (device.platform == 'iOS') {
        console.log("device.platform == 'iOS'");
        var recogEngineConfig = {
            setBlurPercentage: 60,
            setFaceBlurPercentage: 80,
            setGlarePercentageMin: 6,
            setGlarePercentageMax: 98,
            isCheckPhotoCopy: false,
            SetHologramDetection: true,
            setLowLightTolerance: 10,
            setMotionThreshold: 4
        }
    } else {
        console.log("device.platform != 'iOS'");
        var recogEngineConfig = {
            setBlurPercentage: 52,
            setFaceBlurPercentage: 70,
            setGlarePercentageMin: 6,
            setGlarePercentageMax: 98,
            isCheckPhotoCopy: false,
            SetHologramDetection: true,
            setLowLightTolerance: 39,
            setMotionThreshold: 18
        }
    }

    var config = {
        ACCURA_ERROR_CODE_MOTION: "Keep Document Steady",
        ACCURA_ERROR_CODE_PROCESSING: "Processing...",
        ACCURA_ERROR_CODE_BLUR_DOCUMENT: "Blur detect in document",
        ACCURA_ERROR_CODE_FACE_BLUR: "Blur detected over face",
        ACCURA_ERROR_CODE_GLARE_DOCUMENT: "Glare detect in document",
        ACCURA_ERROR_CODE_HOLOGRAM: "Hologram Detected",
        ACCURA_ERROR_CODE_DARK_DOCUMENT: "Low lighting detected",
        ACCURA_ERROR_CODE_PHOTO_COPY_DOCUMENT: "Can not accept Photo Copy Document",
        ACCURA_ERROR_CODE_FACE: "Face not detected",
        ACCURA_ERROR_CODE_MRZ: "MRZ not detected",
        ACCURA_ERROR_CODE_PASSPORT_MRZ: "Passport MRZ not detected",
        ACCURA_ERROR_CODE_ID_MRZ: "ID card MRZ not detected",
        ACCURA_ERROR_CODE_VISA_MRZ: "Visa MRZ not detected",
        SCAN_TITLE_MRZ_FRONT: "Scan Front Side of Document",
        SCAN_TITLE_MRZ_BACK: "Now Scan Back Side of Document",
        IS_SHOW_LOGO: 1,
        CAMERA_BG_COLOR: "#80000000",
        CAMERA_BORDER_COLOR: "#D5323F",
        CAMERA_FLIP_IMAGE: 1,
        CAMERA_BACK_BTN: 1,
        CAMERA_TEXT_COLOR: "#FFFFFF",
        CAMERA_TEXT_BORDER_COLOR: "#000000",
        CAMERA_FLIP_ANIMATION: 1

    }

    accura.setupAccuraConfig(config, recogEngineConfig, function(result) {
        console.log("Success:- ", result);
    }, function(error) {
        console.log(error);
    });
}
```

# 4.Method For Scan MRZ Documents.
```
function startMRZ(id) {
    accura.startMRZ({enableLogs:false}, id, mrzCountryList, function(result) {
        generateResult(result);
    }, function(error) {
        console.log(error);
    });
}
```
#### MRZType: String
#### value: passport_mrz or id_mrz or visa_mrz or other_mrz

MRZType: String

default: other_mrz

CountryList: String

default: all or IND,USA

Success: JSON Response {

front_data: JSONObjects?,

back_data: JSONObjects?,

type: Recognition Type,
s
face: URI?

front_img: URI?

back_img: URI?

}

Error: String

# 10. To Remove Cordova Plugin
` $ cordova plugin rm cordova-mrz-demo `
