'use strict';

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-Xss-Protection', '1; mode=block');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Etag', '"02af45393107ad8eb24c553d6647db85"');
  res.setHeader('Cache-Control', 'max-age=0, private, must-revalidate');
  res.setHeader('X-Request-Id', '4931bbaf-9adb-40e4-9906-83c7e8bfbc00');
  res.setHeader('X-Runtime', '0.033630');
  res.setHeader('Vary', 'Origin');
  res.setHeader('Date', 'Tue, 22 Mar 2016 21:38:08 GMT');
  res.setHeader('Connection', 'close');

  res.write(new Buffer(JSON.stringify({
    "id": 5,
    "biller_id": 2,
    "account_number": "8081969",
    "name_on_account": null,
    "due_date": null,
    "balance": 44.0,
    "balance_currency": "RD",
    "balance_in_chain_currency": 1.01,
    "balance_updated_at": "2016-03-22T21:38:08Z",
    "created_at": "2016-03-22T21:32:36Z",
    "last_paid_at": null,
    "error_with_account": false,
    "error_message": null,
    "status": "updated",
    "mfa_challenges": []
  })));
  res.end();

  return __filename;
};
