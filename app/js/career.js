
$(document).ready(function(){
$('.apply-btn').click(function(){
  $('html, body').animate({scrollTop:$('.formArea').offset().top}, 1000);
});
$('#back-to-top').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0}, 1000);
  });

  $('.job-link-one').click(function(e){
    e.preventDefault();
    $('.hidden_content_one').slideToggle();
    $('.x').click(function(e){
      $('.hidden_content_one').slideUp();
    });
  });

  $('.job-link-two').click(function(e){
    e.preventDefault();
    $('.hidden_content_two').slideToggle();
    $('.x').click(function(e){
      $('.hidden_content_two').slideUp();
    });
  });

  $('.job-link-three').click(function(e){
    e.preventDefault();
    $('.hidden_content_three').slideToggle();
    $('.x').click(function(e){
      $('.hidden_content_three').slideUp();
    });
  });

g

  $('#submit').click(function(e){
    e.preventDefault();
    $('form').slideUp('slow').hide();
    $('.thanks-section').addClass('animated zoomIn').show();

  });

  // $('.pick-job').each(function(){
  //   console.log(this);
  //   this.innerHTML=$('#job-link-button').html();
  //
  // });




    // var jobImpressions = [{"positionType":"Regular (Full-Time)","location":{"zip":"48226","country":"USA","city":"Detroit","state":"MI"},"company":"OneReverse Mortgage","id":"2MW81MRcwFTV1Dghz","position":1,"title":"Mortgage Banker","category":"Sales","postedDate":"2017-06-28"},{"positionType":"Regular (Full-Time)","location":{"zip":"44113","country":"USA","city":"Cleveland","state":"OH"},"company":"Quicken Loans","id":"2aLg5tLirY28Ju29n","position":2,"title":"Mortgage Loan Officer","category":"Sales","postedDate":"2017-05-18"},{"positionType":"Regular (Full-Time)","location":{"zip":"85260","country":"USA","city":"Scottsdale","state":"AZ"},"company":"Quicken Loans","id":"2tBS4pad4yRH2jyLD","position":3,"title":"Mortgage Loan Officer","category":"Sales","postedDate":"2017-03-23"},{"positionType":"Regular (Full-Time)","location":{"zip":"44113","country":"USA","city":"Cleveland","state":"OH"},"company":"Quicken Loans","id":"2qPqLBg7e6zSoLe7e","position":4,"title":"Mortgage Banker","category":"Sales","postedDate":"2017-03-23"},{"positionType":"Regular (Full-Time)","location":{"zip":"48226","country":"USA","city":"Detroit","state":"MI"},"company":"Quicken Loans","id":"2zXCerzcxAshpeFhm","position":5,"title":"Mortgage Loan Officer","category":"Sales","postedDate":"2017-03-23"},{"positionType":"Regular (Full-Time)","location":{"zip":"48226","country":"USA","city":"Detroit","state":"MI"},"company":"Quicken Loans","id":"3gwVBgQShJGqZL587","position":6,"title":"Mortgage Banker","category":"Sales","postedDate":"2017-03-23"},{"positionType":"Regular (Full-Time)","location":{"zip":"48226","country":"USA","city":"Detroit","state":"MI"},"company":"Bedrock Real Estate","id":"25qzn7CfvgGySRgaJ","position":7,"title":"Legal Administrative Assistant","category":"Legal/Compliance","postedDate":"2017-07-11"},{"positionType":"Regular (Full-Time)","location":{"zip":"48226","country":"USA","city":"Detroit","state":"MI"},"company":"Title Source","id":"n3H349ewTjUs9nHS","position":8,"title":"Paralegal","category":"Legal/Compliance","postedDate":"2017-07-12"},{"positionType":"Regular (Full-Time)","location":{"zip":"48226","country":"USA","city":"Detroit","state":"MI"},"company":"Quicken Loans","id":"2wKsgxRdTRyg5zPnC","position":9,"title":"Team Leader, Accounting","category":"Accounting/Finance","postedDate":"2017-07-11"},{"positionType":"Regular (Full-Time)","location":{"zip":"48226","country":"USA","city":"Detroit","state":"MI"},"company":"Quicken Loans","id":"hSB4t1BTB5ikdcXh","position":10,"title":"Metadata Specialist","category":"Information Technology","postedDate":"2017-07-11"},{"positionType":"Regular (Full-Time)","location":{"zip":"48226","country":"USA","city":"Detroit","state":"MI"},"company":"Rock Connections","id":"e1KVAfMLP2mFCN8C","position":11,"title":"Resolution Specialist","category":"Customer Service","postedDate":"2017-06-29"},{"positionType":"Regular (Full-Time)","location":{"zip":"48226","country":"USA","city":"Detroit","state":"MI"},"company":"Title Source","id":"2xmNPddng9jvtRrzk","position":12,"title":"Escrow Accounting Analyst","category":"Accounting/Finance","postedDate":"2017-06-27"},{"positionType":"Regular (Full-Time)","location":{"zip":"48226","country":"USA","city":"Detroit","state":"MI"},"company":"Quicken Loans","id":"LgrCtX4NesuEdST7","position":13,"title":"Software Engineer in Test","category":"Information Technology","postedDate":"2017-06-22"},{"positionType":"Regular (Full-Time)","location":{"zip":"48226","country":"USA","city":"Detroit","state":"MI"},"company":"Quicken Loans","id":"xLiAEHKp4VEuqY2m","position":14,"title":"Data Scientist","category":"Information Technology","postedDate":"2017-06-22"},{"positionType":"Regular (Full-Time)","location":{"zip":"48226","country":"USA","city":"Detroit","state":"MI"},"company":"Quicken Loans","id":"37dHnxr9aQoE8c8G5","position":15,"title":"Technical Data Steward","category":"Information Technology","postedDate":"2017-07-06"},{"positionType":"Regular (Full-Time)","location":{"zip":"48226","country":"USA","city":"Detroit","state":"MI"},"company":"LevelEleven","id":"2wF5fTuJTiYDcSTVf","position":16,"title":"Marketing Strategist","category":"Business Development","postedDate":"2017-06-29"},{"positionType":"Regular (Full-Time)","location":{"zip":"48226","country":"USA","city":"Detroit","state":"MI"},"company":"StockX","id":"39PocDt2LW4oYDJm3","position":17,"title":"Director of Customer Retention & Maximization","category":"Customer Service","postedDate":"2017-06-27"},{"positionType":"Regular (Full-Time)","location":{"zip":"48226","country":"USA","city":"Detroit","state":"MI"},"company":"StockX","id":"AHkDg5G1P484n9YA","position":18,"title":"VP of Content","category":"Customer Service","postedDate":"2017-06-26"},{"positionType":"Regular (Full-Time)","location":{"zip":"48226","country":"USA","city":"Detroit","state":"MI"},"company":"StockX","id":"37MDwqA74bDanD6sX","position":19,"title":"Director of Affiliate & Online Advertising","category":"Customer Service","postedDate":"2017-06-30"},{"positionType":"Regular (Full-Time)","location":{"zip":"48226","country":"USA","city":"Detroit","state":"MI"},"company":"StockX","id":"Hu9MnnnBJnXjhEH8","position":20,"title":"Director of PR & Communication","category":"Customer Service","postedDate":"2017-06-26"}];
    //
    //
    // var icimsSD = {"person":{},"companyName":"Quicken Loans","env":"prod","job":{"zipCode":"48226","jid":25094,"jobUrls":[{"name":"Quicken Loans Careers","url":"https://careers-quickenloans.icims.com/jobs/25094/data-scientist/job"}],"location":"Detroit, Michigan, United States","title":"Data Scientist"},"version":"1.015","key":"1","cid":"IDYaKEV7hcGMGDKB6ek45DtZBY0QsKMW6iFIPBq0J2IQ90xrQcQi+38J1LEr"};
    //
    //
    //
    //  var jobDescription= [{"hiringOrganization":{"@type":"Organization","name":"Quicken Loans Inc.","sameAs":"www.quickenloans.com"},"jobLocation":[{"address":{"addressCountry":"US","@type":"PostalAddress","addressLocality":"Detroit","addressRegion":"MI"},"@type":"Place"}],"@type":"JobPosting","description":"<h1>Who We Are<\/h1>\n<p>One Reverse Mortgage, a Quicken Loans company, is one of the fastest-growing reverse mortgage companies in the nation. Every day, more and more senior homeowners choose One Reverse Mortgage for their home financing needs.<\/p>\n<h1>What You'll Do/Need<\/h1>\n<p>Loan officers here at One Reverse Mortgage make a difference for our clients every day. Known as Mortgage Bankers, they\u2019re trained to listen, understand and analyze the needs of clients to provide them with financial solutions for their individual situations.<\/p>\n<p><strong>Responsibilities<\/strong><\/p>\n<ul>\n <li>Consult with clients about their needs to help them achieve their financial goals<\/li>\n <li>Establish an ongoing relationship with clients through the delivery of world-class service<\/li>\n <li>Interview clients and gather information pertaining to their financial situations, needs and objectives<\/li>\n <li>Use state-of-the-art technologies to conduct credit, underwriting and financial analyses and qualify the client for various loan programs<\/li>\n <li>Advise and educate clients on the Reverse Mortgage product and how to better manage their finances<\/li>\n <li>Assist clients through the loan process from application to closing and troubleshoot any transaction issues<\/li>\n<\/ul>\n<p><strong>Requirements<\/strong><\/p>\n<ul>\n <li>Various work backgrounds and experience levels welcomed:&nbsp;<strong>NO LENDING EXPERIENCE NECESSARY<\/strong><\/li>\n <li>Our Reverse Mortgage Bankers may work 45 or more hours per week, which can include weekends<\/li>\n <li>All Mortgage Bankers, regardless of experience, attend eight weeks of industry-leading training<\/li>\n <li>Passion, great communication skills, self-motivation, positive attitude and a competitive spirit<\/li>\n <li>Must meet National Mortgage Licensing System (NMLS) and Secure and Fair Enforcement for Mortgage Licensing Act (SAFE Act) Requirements.<\/li>\n<\/ul>\n<h1>What You'll Get<\/h1>\n<ul>\n <li>Excellent benefits package that includes a 401(k) match, medical/dental/vision, and much more<\/li>\n <li>Opportunities to participate in professional and personal development programs, including personal empowerment coaching, leadership training and ongoing personal growth training<\/li>\n <li>Other incentives, contests and rewards, including trips, event tickets, cash prizes and more<\/li>\n<\/ul>\n<p><strong>Why We\u2019re Different<\/strong><\/p>\n<p>&nbsp;<\/p>\n<p>Meet the anti-corporate culture of One Reverse Mortgage, where there's no daunting hierarchy, &quot;boss&quot; is a four-letter word, and if you work hard, you're the one who\u2019ll reap the rewards, both personally and professionally. More than any other place you'll work, we\u2019re dedicated to honing your skills, helping you grow and making sure you have plenty of fun while you\u2019re at it.<\/p>\n<p>&nbsp;<\/p>\n<p>One Reverse Mortgage is an equal opportunity employer<\/p>","@id":"25097","datePosted":"2017-06-28T04:00:00.000Z","title":"Mortgage Banker","@context":"http://schema.org"}]
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //   function isEven(n) {
    //      return n % 2 == 0;
    //   }
    //
    //   var jobs = '';
    //   var jobsList = '';
    //   var hiddenShit='';
    //
    //   for (i=0; i<jobImpressions.length;i++){
    //     //console.log(jobImpressions[0].company);
    //     // $(jobImpressions).each(function(){
    //       console.log('jobimpressions = ', jobImpressions);
    //       if (jobImpressions[i].company === 'Quicken Loans'){
    //
    //         var rowClass='';
    //         // $( "application/ld+json":contains(jobImpressions[i].title))
    //         var something = $("script:contains(jobImpressions[i].title)");
    //         console.log(something);
    //
    //         if (isEven(i)){
    //           rowClass = '<div class="job-listing-row">'
    //           } else{
    //             rowClass='<div class="job-listing-row odd">'
    //           }
    //
    //         jobs+='<div class="job-nest-row">'+ rowClass +
    //
    //
    //         				'<div class="job-company title">'+
    //         					'<h4 class="job">'+
    //         						'<a href="#" id=job-link-button class="job-link-one">'+jobImpressions[i].title+'</a>'+
    //         					'</h4>'+
    //         				'</div>' +
    //
    //         				'<div class="job-company location">'+
    //         					'<h4 class="job">'+jobImpressions[i].location.country+'-'+jobImpressions[i].location.state+'-'+jobImpressions[i].location.city+'</h4>'+
    //         				'</div>'+
    //         			'</div>'+
    //
    //
    //               // '<iframe src="https://careers-quickenloans.icims.com/jobs/25097/mortgage-banker/job"></iframe>'+
    //               // '<iframe src="https://careers-quickenloans.icims.com/jobs/search?ss=1&searchRelation=keyword_all&in_iframe=1"></iframe>'+
    //
    //
    //         		'</div>';
    //
    //             // $("#descrtion-dtails").append(jobDescription.hiringOrganization.JobPosting.description);
    //
    //
    //
    //
    //
    //
    //
    //
    //       jobsList+=('<div class="list-two">' +
    //         	'<ul>'+
    //         		'<li><strong>Title:  </strong><span class="comp-title"><a class="job-link">'+jobImpressions[i].title+'</a></span></li>'+
    //         		'<li><strong>Location:  </strong> <span class="comp-location">'+jobImpressions[i].location.country+'-'+jobImpressions[i].location.state+'-'+jobImpressions[i].location.city+'</span></li>'+
    //         	'</ul>'+
    //           '</div>');
    //         }
    //
    //
    //     };
    //     $('#jobRow').append(jobs);
    //     $("#listTwo").append(jobsList);

      });
