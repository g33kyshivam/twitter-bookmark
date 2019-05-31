const urlContainer = $('#url-container');
function apendURL(data,err){
    if(err){
        console.log('There was some error');
        return;
    }

    console.log('Woring');
    console.log(data);
}

$.ajax({
    url: 'https://api.twitter.com/2/timeline/bookmark.json',
    method: 'GET',
    headers: {
        // 'Origin' : 'https://mobile.twitter.com',
        // 'Referer': 'https://mobile.twitter.com/i/bookmarks',
        'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
        'x-csrf-token': '42a96bf8093e7cdfe6cebbbecb912072',
        // 'Cookie': 'personalization_id="v1_57db9VBS3MsYdZqfBPOCFg=="; guest_id=v1%3A155741583698041212; _ga=GA1.2.35782300.1557415837; ads_prefs="HBERAAA="; kdt=77vc9iHHHe2MWwKq149k308WWA3Gp2AlXoGhhhYD; remember_checked_on=1; twid=u%3D760530747484545025; u=0ebbf4c1b9a6f57e793533641b534ea0; auth_token=0428bebabffe09703ae7e453595407e60eebce1e; ct0=42a96bf8093e7cdfe6cebbbecb912072; _gid=GA1.2.257634141.1559289495; _gat=1'  
    },

    success: apendURL,
    data: {
      include_profile_interstitial_type: '1',
      include_reply_count: '1',
      include_blocking: '1',
      include_blocked_by: '1',
      tweet_mode:'extended',
      include_can_dm: '1',
      include_followed_by: '1',
      include_want_retweets: '1',
      include_can_media_tag: '1',
      send_error_codes: 'true',
      include_ext_alt_text: 'true',
      tweet_mode: 'extended',
      count: '10'
    }
});