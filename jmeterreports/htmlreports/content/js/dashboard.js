/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 94.87047961015645, "KoPercent": 5.12952038984355};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.062451910746345214, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.045, 500, 1500, "http://127.0.0.1:8888/bookmarks?page=1&limit=25&sort=created_at&extension=videos&search=&start_date=&end_date="], "isController": false}, {"data": [0.005, 500, 1500, "http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=&content_type=transcriptions&search_type=public&sort=modified_at"], "isController": false}, {"data": [0.005, 500, 1500, "http://127.0.0.1:8888/public-index/bafkreicce5hmi2urus6qxs5abjckkliqvawfiqr4u7l2ndn3n7jyrubs7e"], "isController": false}, {"data": [0.0, 500, 1500, "http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=&content_type=images&search_type=public&sort=modified_at"], "isController": false}, {"data": [0.085, 500, 1500, "http://127.0.0.1:8888/folders/details?page=1&limit=25&search=19"], "isController": false}, {"data": [0.04, 500, 1500, "http://127.0.0.1:8888/files/edit"], "isController": false}, {"data": [0.1425, 500, 1500, "http://127.0.0.1:8888/folders?page=1&limit=54&status=1&search="], "isController": false}, {"data": [0.275, 500, 1500, "http://127.0.0.1:8888/default-interests"], "isController": false}, {"data": [0.0, 500, 1500, "http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=&content_type=docs&search_type=public&sort=modified_at"], "isController": false}, {"data": [0.0, 500, 1500, "http://127.0.0.1:8888/folders/delete"], "isController": false}, {"data": [0.12, 500, 1500, "http://127.0.0.1:8888/folders/details?page=1&limit=25&search=197"], "isController": false}, {"data": [0.0, 500, 1500, "http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=%20Transportable%20Port%20Security%20Boat&content_type=all&search_type=public&sort=modified_at"], "isController": false}, {"data": [0.055, 500, 1500, "http://127.0.0.1:8888/folders/details?page=1&limit=25&search="], "isController": false}, {"data": [0.065, 500, 1500, "http://127.0.0.1:8888/folders/details?page=1&limit=25&search=1"], "isController": false}, {"data": [0.04, 500, 1500, "http://127.0.0.1:8888/orbitdb-received-request-files?page=1&limit=25&sort=created_at&search=&start_date=&end_date="], "isController": false}, {"data": [0.145, 500, 1500, "http://127.0.0.1:8888/folders/details?page=1&limit=25&search=1970"], "isController": false}, {"data": [0.0, 500, 1500, "http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=&content_type=all&search_type=public&sort=modified_at"], "isController": false}, {"data": [0.005, 500, 1500, "http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=boat%20disaster&content_type=images&search_type=public&sort=modified_at"], "isController": false}, {"data": [0.04, 500, 1500, "http://127.0.0.1:8888/bookmarks?page=1&limit=25&sort=created_at&extension=images&search=&start_date=&end_date="], "isController": false}, {"data": [0.015, 500, 1500, "http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=&content_type=videos&search_type=public&sort=modified_at"], "isController": false}, {"data": [0.11055276381909548, 500, 1500, "http://127.0.0.1:8888/settings"], "isController": false}, {"data": [0.02, 500, 1500, "http://127.0.0.1:8888/bookmarks"], "isController": false}, {"data": [0.0, 500, 1500, "http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=boat%20disaster&content_type=all&search_type=public&sort=modified_at"], "isController": false}, {"data": [0.16, 500, 1500, "http://127.0.0.1:8888/public-index"], "isController": false}, {"data": [0.005, 500, 1500, "http://127.0.0.1:8888/public-stats"], "isController": false}, {"data": [0.21, 500, 1500, "http://127.0.0.1:8888/load-public-indexes"], "isController": false}, {"data": [0.01, 500, 1500, "http://127.0.0.1:8888/files-stats"], "isController": false}, {"data": [0.0, 500, 1500, "http://127.0.0.1:8888/bookmarks/delete"], "isController": false}, {"data": [0.08, 500, 1500, "http://127.0.0.1:8888/folders?page=1&limit=54&status=0&search="], "isController": false}, {"data": [0.2, 500, 1500, "http://127.0.0.1:8888/orbitdb-requested-files?page=1&limit=25&sort=created_at&search=&start_date=&end_date="], "isController": false}, {"data": [0.025, 500, 1500, "http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=&content_type=all&search_type=local&sort=modified_at"], "isController": false}, {"data": [0.155, 500, 1500, "http://127.0.0.1:8888/bookmarks?page=1&limit=25&sort=created_at&extension=all&search=&start_date=&end_date="], "isController": false}, {"data": [0.045, 500, 1500, "http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=boat%20disaster&content_type=transcriptions&search_type=public&sort=modified_at"], "isController": false}, {"data": [0.0, 500, 1500, "http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=Boat&content_type=all&search_type=public&sort=modified_at"], "isController": false}, {"data": [0.0, 500, 1500, "http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=Thekkady%20boat%20disaster&content_type=all&search_type=public&sort=modified_at"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 3899, 200, 5.12952038984355, 77448.89715311612, 25, 2749697, 37632.0, 161687.0, 251430.0, 606288.0, 1.0194330237209699, 5.4748690350323885, 0.4741773402315229], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["http://127.0.0.1:8888/bookmarks?page=1&limit=25&sort=created_at&extension=videos&search=&start_date=&end_date=", 100, 0, 0.0, 46847.200000000004, 123, 290744, 26910.5, 120371.60000000005, 169866.49999999983, 290641.12999999995, 0.03189838450631668, 0.004641464151798032, 0.014048995519871897], "isController": false}, {"data": ["http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=&content_type=transcriptions&search_type=public&sort=modified_at", 100, 0, 0.0, 67257.54000000001, 588, 297143, 55072.5, 130828.50000000006, 224244.55, 296962.7499999999, 0.029361177124824347, 0.34628411732080433, 0.013361629433757955], "isController": false}, {"data": ["http://127.0.0.1:8888/public-index/bafkreicce5hmi2urus6qxs5abjckkliqvawfiqr4u7l2ndn3n7jyrubs7e", 100, 0, 0.0, 126626.51999999993, 813, 698873, 70274.0, 358159.1000000001, 370655.8, 698278.5899999997, 0.029814888302993205, 0.005066201723360174, 0.015111256864505346], "isController": false}, {"data": ["http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=&content_type=images&search_type=public&sort=modified_at", 100, 0, 0.0, 68188.68000000001, 5591, 255712, 48260.5, 160689.4, 235425.6999999999, 255711.12, 0.02929416586180946, 0.3444067019632071, 0.013102273403035871], "isController": false}, {"data": ["http://127.0.0.1:8888/folders/details?page=1&limit=25&search=19", 100, 0, 0.0, 43968.18, 65, 312757, 22290.0, 124219.3, 190019.6499999999, 312432.32999999984, 0.032691116352586765, 0.1413635382902873, 0.018165278520138547], "isController": false}, {"data": ["http://127.0.0.1:8888/files/edit", 100, 0, 0.0, 85357.84999999996, 429, 677002, 51762.0, 209620.10000000006, 266531.34999999986, 676294.8599999996, 0.029504556536188664, 0.00478296521973371, 0.016798004356052727], "isController": false}, {"data": ["http://127.0.0.1:8888/folders?page=1&limit=54&status=1&search=", 200, 0, 0.0, 39175.310000000034, 80, 393834, 15875.5, 74737.00000000001, 207794.14999999967, 343174.0800000005, 0.05248850632932654, 0.03746982238939228, 0.020657097705779875], "isController": false}, {"data": ["http://127.0.0.1:8888/default-interests", 100, 0, 0.0, 9806.189999999999, 45, 96482, 4351.5, 25596.900000000016, 49844.44999999993, 96240.41999999988, 0.0344654545855598, 0.010703139217000016, 0.012789914787610083], "isController": false}, {"data": ["http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=&content_type=docs&search_type=public&sort=modified_at", 100, 0, 0.0, 66109.63, 2942, 293745, 57389.5, 103979.90000000001, 200137.39999999985, 293518.21999999986, 0.029370197238496574, 0.4641294255013199, 0.013078915957768006], "isController": false}, {"data": ["http://127.0.0.1:8888/folders/delete", 100, 100, 100.0, 57467.700000000026, 393, 1403287, 25910.0, 93341.0, 171917.3499999999, 1393845.1499999953, 0.03284083034755451, 0.007183931638527549, 0.013822654179488275], "isController": false}, {"data": ["http://127.0.0.1:8888/folders/details?page=1&limit=25&search=197", 100, 0, 0.0, 41413.29000000001, 25, 291510, 23354.5, 100627.60000000002, 146807.54999999973, 291239.56999999983, 0.03341405054142457, 0.14448966386467577, 0.018599617977160157], "isController": false}, {"data": ["http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=%20Transportable%20Port%20Security%20Boat&content_type=all&search_type=public&sort=modified_at", 100, 0, 0.0, 133483.91, 13331, 431916, 99691.5, 297406.7, 307677.0, 431654.07999999984, 0.028187967515058716, 0.47250631093357703, 0.01343332826889517], "isController": false}, {"data": ["http://127.0.0.1:8888/folders/details?page=1&limit=25&search=", 100, 0, 0.0, 41008.020000000004, 399, 341789, 18543.5, 90690.8, 208014.59999999922, 341436.01999999984, 0.033302705944766135, 0.9568023524365425, 0.018440072529963276], "isController": false}, {"data": ["http://127.0.0.1:8888/folders/details?page=1&limit=25&search=1", 100, 0, 0.0, 40508.86, 69, 287035, 22756.5, 110309.80000000003, 130668.99999999981, 286405.50999999966, 0.032493981302313284, 0.61078530479192, 0.018024005253626896], "isController": false}, {"data": ["http://127.0.0.1:8888/orbitdb-received-request-files?page=1&limit=25&sort=created_at&search=&start_date=&end_date=", 100, 0, 0.0, 83326.98999999996, 189, 343711, 54259.5, 277730.40000000014, 290457.39999999997, 343315.2799999998, 0.029564674943790163, 0.004301891178344467, 0.013136647558031761], "isController": false}, {"data": ["http://127.0.0.1:8888/folders/details?page=1&limit=25&search=1970", 100, 0, 0.0, 42140.970000000016, 61, 343734, 23346.0, 74285.40000000001, 213384.69999999925, 343159.7799999997, 0.03458112403177175, 0.149536344934263, 0.019283029123185226], "isController": false}, {"data": ["http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=&content_type=all&search_type=public&sort=modified_at", 200, 0, 0.0, 50742.259999999995, 1568, 292748, 49305.5, 90030.9, 112075.54999999984, 286838.5500000007, 0.05276437855697867, 0.6823299813003042, 0.023445109612720012], "isController": false}, {"data": ["http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=boat%20disaster&content_type=images&search_type=public&sort=modified_at", 100, 0, 0.0, 112571.51999999999, 531, 528449, 65971.5, 255713.30000000002, 290321.89999999997, 526601.8999999991, 0.028554189999009168, 0.004154857724465202, 0.013133812001497382], "isController": false}, {"data": ["http://127.0.0.1:8888/bookmarks?page=1&limit=25&sort=created_at&extension=images&search=&start_date=&end_date=", 100, 0, 0.0, 49731.91000000001, 120, 342155, 22406.0, 146208.5000000002, 278102.6999999995, 341775.7999999998, 0.03143080570984589, 0.004573427783952185, 0.01384305993666064], "isController": false}, {"data": ["http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=&content_type=videos&search_type=public&sort=modified_at", 100, 0, 0.0, 59527.840000000004, 232, 289153, 53432.5, 92222.1, 144086.69999999984, 288833.7399999998, 0.02994540055117504, 0.3523848404703704, 0.013393548293396649], "isController": false}, {"data": ["http://127.0.0.1:8888/settings", 199, 0, 0.0, 203165.2964824121, 133, 2630154, 12733.0, 152287.0, 2584748.0, 2628854.0, 0.06776059738287461, 0.09398717007143806, 0.04525664113442817], "isController": false}, {"data": ["http://127.0.0.1:8888/bookmarks", 100, 0, 0.0, 88338.44000000002, 439, 444437, 57763.5, 223097.40000000008, 254352.24999999997, 442814.34999999916, 0.02907421309188556, 0.0037762405675984176, 0.017149242878416873], "isController": false}, {"data": ["http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=boat%20disaster&content_type=all&search_type=public&sort=modified_at", 100, 0, 0.0, 118707.11000000003, 7805, 353927, 82774.0, 273211.3, 289335.39999999997, 353432.23999999976, 0.028074738322382782, 0.46783919407533187, 0.012831032748901506], "isController": false}, {"data": ["http://127.0.0.1:8888/public-index", 100, 0, 0.0, 31177.269999999997, 130, 342176, 11140.0, 87494.10000000002, 142038.89999999947, 341616.5099999997, 0.03446469436709035, 0.005654363919600761, 0.012621348034823128], "isController": false}, {"data": ["http://127.0.0.1:8888/public-stats", 100, 0, 0.0, 83469.47999999997, 776, 2621786, 52929.5, 100959.30000000003, 126034.59999999993, 2598786.639999988, 0.0315167300257996, 0.012064998213001407, 0.011541771249682468], "isController": false}, {"data": ["http://127.0.0.1:8888/load-public-indexes", 100, 0, 0.0, 62224.92, 90, 998888, 6786.5, 67199.90000000001, 531193.8499999959, 998886.12, 0.036538222634698164, 0.005637733570588192, 0.013630469771928415], "isController": false}, {"data": ["http://127.0.0.1:8888/files-stats", 100, 0, 0.0, 65541.95, 438, 294054, 59310.0, 109926.60000000002, 148885.54999999996, 294028.74, 0.030477778803862998, 0.009048090582396827, 0.01113153249281715], "isController": false}, {"data": ["http://127.0.0.1:8888/bookmarks/delete", 100, 100, 100.0, 55718.51000000004, 645, 322082, 34869.5, 126552.40000000001, 292223.89999999956, 322081.93, 0.030862101956040024, 0.006751084802883755, 0.01305008803414583], "isController": false}, {"data": ["http://127.0.0.1:8888/folders?page=1&limit=54&status=0&search=", 200, 0, 0.0, 77334.14500000008, 95, 2684217, 19100.5, 90158.20000000006, 187098.74999999994, 2684159.67, 0.05247202257346411, 0.037560539596044135, 0.020650610446392614], "isController": false}, {"data": ["http://127.0.0.1:8888/orbitdb-requested-files?page=1&limit=25&sort=created_at&search=&start_date=&end_date=", 100, 0, 0.0, 32359.77, 333, 654760, 9574.0, 55868.9, 134865.84999999948, 653380.3099999994, 0.03567323601198906, 0.005190734536900752, 0.015607040755245213], "isController": false}, {"data": ["http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=&content_type=all&search_type=local&sort=modified_at", 100, 0, 0.0, 71198.48999999999, 497, 343548, 49973.5, 166406.1, 214151.94999999984, 343100.6599999998, 0.029472660423374767, 0.24381143207656997, 0.013066980304894673], "isController": false}, {"data": ["http://127.0.0.1:8888/bookmarks?page=1&limit=25&sort=created_at&extension=all&search=&start_date=&end_date=", 100, 0, 0.0, 24644.069999999996, 140, 248735, 8551.0, 67132.70000000001, 134802.39999999994, 247786.9699999995, 0.034853248653880405, 0.013545796776632153, 0.015248296286072677], "isController": false}, {"data": ["http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=boat%20disaster&content_type=transcriptions&search_type=public&sort=modified_at", 100, 0, 0.0, 89791.46, 458, 701213, 59741.5, 193928.5, 279774.64999999956, 697243.7499999979, 0.02906353230033789, 0.00422897100854526, 0.01359514841002134], "isController": false}, {"data": ["http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=Boat&content_type=all&search_type=public&sort=modified_at", 100, 0, 0.0, 242226.00000000003, 4374, 2749697, 53810.0, 189586.90000000008, 2672749.9, 2749041.8899999997, 0.03219645504151411, 0.5563321049849128, 0.014431809437553688], "isController": false}, {"data": ["http://127.0.0.1:8888/search-indexing?page=1&limit=25&search=Thekkady%20boat%20disaster&content_type=all&search_type=public&sort=modified_at", 100, 0, 0.0, 140189.85999999993, 18328, 703659, 105560.0, 254801.90000000002, 311964.1499999999, 703273.9599999998, 0.02758088093333701, 0.10601401108751414, 0.01284773457539234], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["422/Unprocessable Entity", 200, 100.0, 5.12952038984355], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 3899, 200, "422/Unprocessable Entity", 200, "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["http://127.0.0.1:8888/folders/delete", 100, 100, "422/Unprocessable Entity", 100, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["http://127.0.0.1:8888/bookmarks/delete", 100, 100, "422/Unprocessable Entity", 100, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
