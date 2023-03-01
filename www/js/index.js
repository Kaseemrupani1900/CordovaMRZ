document.addEventListener('deviceready', onDeviceReady, false);

var accura;
var loadingImg = "data:image/png;base64,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";

function onDeviceReady() {

    screen.orientation.lock('portrait');
    $('#orientation-btn').on('click', function () {
        var txt = $('#orientation-btn').text().trim().toLowerCase();
        if (txt.indexOf('landscape') !== -1) {
            screen.orientation.lock('landscape');
            $('#orientation-btn').text("Portrait");
        } else {
            screen.orientation.lock('portrait');
            $('#orientation-btn').text("Landscape");
        }
    });

    window.alert = function(m) {
        Swal.fire({
            title: "Accura",
            text: m,
            confirmButtonColor: "red"
        })
    }

    accura = cordova.plugins.CordovaMRZPlugin;

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    getMetadata();
    setupAccuraConfig();
}

var mrzSelected = "other_mrz";
var mrzCountryList = 'all';

var mrzTypes = ["passport_mrz", "id_mrz", "visa_mrz", "other_mrz"];
var mrzNames = ["Passport MRZ", "ID MRZ", "Visa MRZ", "Other MRZ"];

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

function startMRZ(id) {
    accura.startMRZ({enableLogs:false}, id, mrzCountryList, function(result) {
        generateResult(result);
    }, function(error) {
        console.log(error);
    });
}

function generateResult(result) {

    var html = "";
    var sides = ["front_data", "back_data"];

    if (result.hasOwnProperty("face")) {
        html +=
        "<div id='face-div' class='d-flex justify-content-center'>" +
        "   <img id='face' src='" + loadingImg + "' class='img-fluid' style='max-height: 120px'>" +
        "</div><hr>";
        getImage("face", result.face);
    }

    sides.forEach(function(side, i) {
        if (result.hasOwnProperty(side)) {
            if (Object.keys(result[side]).length > 0) {

                if (i === 0) {
                    switch(result.type) {
                        case "MRZ":
                            html += "<h4 class='p-2 font-weight-bold' style='background: lightgrey'>MRZ</h4>";
                            break;
                        default:
                            html += "<h4 class='p-2 font-weight-bold' style='background: lightgrey'>Front Side</h4>";
                            break;
                    }
                } else {
                    html += "<h4 class='p-2 font-weight-bold' style='background: lightgrey'>OCR Back</h4>";
                }

                var table = '<table id="result-table" class="table table-responsive">' +
                                '<thead></thead><tbody>';


                Object.keys(result[side]).forEach(function(key) {
                    if (key !== "PDF417") {
                        if (["signature", "front_img", "back_img"].toString().indexOf(key) === -1) {
                            if(result[side][key] !== null && result[side][key] !== undefined && result[side][key].toString().includes("<")) {
                                table +=
                                "<tr><td class='text-danger p-2'>" + key + "</td><td style='white-space: pre-wrap;word-break: break-word;'>" + result[side][key].toString().replace(/</g, '&lt') + "</td></tr>";
                            } else {
                                if(result.type == "MRZ") {

                                    table +=
                                    "<tr><td class='text-danger p-2'>" + key + "</td><td style='white-space: pre-wrap;word-break: break-word;'>" + result[side][key] + "</td></tr>";

                                } else {

                                    table +=
                                    "<tr><td class='text-danger p-2'>" + key + "</td><td style='white-space: pre-wrap;word-break: break-word;'>" + result[side][key] + "</td></tr>";

                                }
                            }
                        }
                    }
                });

                table += '</tbody></table>';
                html += table;
            }
        }
    });

    if (result.hasOwnProperty("front_img")) {
        html += "<h4 class='p-2 font-weight-bold' style='background: lightgrey'>FRONT SIDE</h4>";
        html += "<img id='front-image' src='" + loadingImg + "' class='img-fluid'>"
        getImage('front-image', result.front_img);
    }
    if (result.hasOwnProperty("back_img")) {
        html += "<h4 class='p-2 font-weight-bold' style='background: lightgrey'>BACK SIDE</h4>";
        html += "<img id='back-image' src='" + loadingImg + "' class='img-fluid'>"
        getImage('back-image', result.back_img);
    }

    $("#resultModal .modal-body").empty().append(html);
    $("#resultModal").modal("show");

}

function getImage(id, uri) {
    if (device.platform == 'iOS') {
        console.log("device.platform == 'iOS'")
        segments = uri.split("/");
        fileName = segments[segments.length - 1];

        resolveLocalFileSystemURL(
            uri,
            dirEntry => {
                //create the permanent folder
            dirEntry.file(function (file) {
                    var reader = new FileReader();
                    reader.onloadend = function () {
                        $('#' + id).attr("src", this.result);
                    };

                    reader.onerror = function () {
                        $('#' + id).attr("src", errorImg);
                    }
                    reader.readAsDataURL(file);

                }, function () {
                    $('#' + id).attr("src", errorImg);
                });
            },
            err => {
                $('#' + id).attr("src", errorImg);
            }
        );

    } else {

        console.log("device.platform != 'iOS'")
        window.resolveLocalFileSystemURL(uri, function (fileEntry) {
            fileEntry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function () {
                    $('#' + id).attr("src", this.result);
                };

                reader.onerror = function () {
                    $('#' + id).attr("src", errorImg);
                }
                reader.readAsDataURL(file);

            }, function () {
                $('#' + id).attr("src", errorImg);
            });
        }, function (error) {
            $('#' + id).attr("src", errorImg);
        });
    }
}
