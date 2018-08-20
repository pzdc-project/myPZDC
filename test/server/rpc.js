
import chai from 'chai';
import RPC from '../../lib/rpc';

const expect = chai.expect;
const rpc = new RPC();
const should = chai.should();

describe('RPC', () => {
  it('getinfo', (done) => {
    rpc.call('getinfo')
      .then((res) => {
        res.version.should.be.a('number');
        res.protocolversion.should.be.a('number');
        res.walletversion.should.be.a('number');
        res.blocks.should.be.a('number');
        res.difficulty.should.be.a('number');
        done();
      });
  });

  it('getnetworkhashps', (done) => {
    rpc.call('getnetworkhashps')
      .then((res) => {
        res.should.be.a('number');
        done();
      });
  });

  it('getblockhash', (done) => {
    rpc.call('getblockhash', [0])
      .then((res) => {
        res.should.be.a('string');
        res.should.eq('00000c6b2241d7e3475bf32fa3b90f5e06667a303bcc06b0d9e677ad5b434d0f');
        done();
      });
  });

  it('getblock', (done) => {
    rpc.call('getblock', ['00000c6b2241d7e3475bf32fa3b90f5e06667a303bcc06b0d9e677ad5b434d0f'])
      .then((res) => {
        res.hash.should.be.a('string');
        res.confirmations.should.be.a('number');
        res.version.should.be.a('number');
        res.merkleroot.should.be.a('string');
        res.tx.should.be.a('array');
        res.time.should.be.a('number');
        res.nonce.should.be.a('number');
        res.bits.should.be.a('string');
        res.difficulty.should.be.a('number');
        res.chainwork.should.be.a('string');
        done();
      });
  });

  it('getrawtransaction', (done) => {
    rpc.call('getrawtransaction', ['c68c45b7e4ce69766f1725b9005fbbed27c7e704e3c879f692d8b76aceee4ddd'])
      .then((res) => {
        res.should.be.a('string');
        res.should.eq('01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff03510101ffffffff010020676ffebe00002321030f57b3dabcd70574f17163f2ce3b769669ee2f159a4e0da2d11a025c92684f44ac00000000');
        done();
      });
  });

  it('getpeerinfo', (done) => {
    rpc.call('getpeerinfo')
      .then((res) => {
        res.should.be.a('array');
        done();
      });
  });

  it('getmasternodecount', (done) => {
    rpc.call('getmasternodecount')
      .then((res) => {
        res.should.be.a('object');
        res.total.should.be.a('number');
        res.stable.should.be.a('number');
        res.enabled.should.be.a('number');
        res.ipv4.should.be.a('number');
        res.ipv6.should.be.a('number');
        res.onion.should.be.a('number');
        done();
      });
  });

  it('masternode list', (done) => {
    rpc.call('masternode', ['list'])
      .then((res) => {
        res.should.be.a('array');
        done();
      });
  });
});
