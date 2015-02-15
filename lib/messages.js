/* For Reference:
 * https://github.com/trezor/trezor-common/blob/master/protob/messages.proto
 */
'use strict';
var ProtoBuf = require('protobufjs');

var TrezorMessages = ProtoBuf.newBuilder().import({
    "package": null,
    "messages": [
        {
            "name": "Initialize",
            "fields": [],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "Features",
            "fields": [
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "vendor",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "uint32",
                    "name": "major_version",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "uint32",
                    "name": "minor_version",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "uint32",
                    "name": "patch_version",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "bootloader_mode",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "device_id",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "pin_protection",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "passphrase_protection",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "language",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "label",
                    "id": 10
                },
                {
                    "rule": "repeated",
                    "options": {},
                    "type": "CoinType",
                    "name": "coins",
                    "id": 11
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "initialized",
                    "id": 12
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bytes",
                    "name": "revision",
                    "id": 13
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bytes",
                    "name": "bootloader_hash",
                    "id": 14
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "imported",
                    "id": 15
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "ClearSession",
            "fields": [],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "ApplySettings",
            "fields": [
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "language",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "label",
                    "id": 2
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "ChangePin",
            "fields": [
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "remove",
                    "id": 1
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "Ping",
            "fields": [
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "message",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "button_protection",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "pin_protection",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "passphrase_protection",
                    "id": 4
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "Success",
            "fields": [
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "message",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bytes",
                    "name": "payload",
                    "id": 2
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "Failure",
            "fields": [
                {
                    "rule": "optional",
                    "options": {},
                    "type": "FailureType",
                    "name": "code",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "message",
                    "id": 2
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "ButtonRequest",
            "fields": [
                {
                    "rule": "optional",
                    "options": {},
                    "type": "ButtonRequestType",
                    "name": "code",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "data",
                    "id": 2
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "ButtonAck",
            "fields": [],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "PinMatrixRequest",
            "fields": [
                {
                    "rule": "optional",
                    "options": {},
                    "type": "PinMatrixRequestType",
                    "name": "type",
                    "id": 1
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "PinMatrixAck",
            "fields": [
                {
                    "rule": "required",
                    "options": {},
                    "type": "string",
                    "name": "pin",
                    "id": 1
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "Cancel",
            "fields": [],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "PassphraseRequest",
            "fields": [],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "PassphraseAck",
            "fields": [
                {
                    "rule": "required",
                    "options": {},
                    "type": "string",
                    "name": "passphrase",
                    "id": 1
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "GetEntropy",
            "fields": [
                {
                    "rule": "required",
                    "options": {},
                    "type": "uint32",
                    "name": "size",
                    "id": 1
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "Entropy",
            "fields": [
                {
                    "rule": "required",
                    "options": {},
                    "type": "bytes",
                    "name": "entropy",
                    "id": 1
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "GetPublicKey",
            "fields": [
                {
                    "rule": "repeated",
                    "options": {},
                    "type": "uint32",
                    "name": "address_n",
                    "id": 1
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "PublicKey",
            "fields": [
                {
                    "rule": "required",
                    "options": {},
                    "type": "HDNodeType",
                    "name": "node",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "xpub",
                    "id": 2
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "GetAddress",
            "fields": [
                {
                    "rule": "repeated",
                    "options": {},
                    "type": "uint32",
                    "name": "address_n",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "options": {
                        "default": "Bitcoin"
                    },
                    "type": "string",
                    "name": "coin_name",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "show_display",
                    "id": 3
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "Address",
            "fields": [
                {
                    "rule": "required",
                    "options": {},
                    "type": "string",
                    "name": "address",
                    "id": 1
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "WipeDevice",
            "fields": [],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "LoadDevice",
            "fields": [
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "mnemonic",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "HDNodeType",
                    "name": "node",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "pin",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "passphrase_protection",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "options": {
                        "default": "english"
                    },
                    "type": "string",
                    "name": "language",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "label",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "skip_checksum",
                    "id": 7
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "ResetDevice",
            "fields": [
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "display_random",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "options": {
                        "default": 128
                    },
                    "type": "uint32",
                    "name": "strength",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "passphrase_protection",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "pin_protection",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "options": {
                        "default": "english"
                    },
                    "type": "string",
                    "name": "language",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "label",
                    "id": 6
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "EntropyRequest",
            "fields": [],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "EntropyAck",
            "fields": [
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bytes",
                    "name": "entropy",
                    "id": 1
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "RecoveryDevice",
            "fields": [
                {
                    "rule": "optional",
                    "options": {},
                    "type": "uint32",
                    "name": "word_count",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "passphrase_protection",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "pin_protection",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "options": {
                        "default": "english"
                    },
                    "type": "string",
                    "name": "language",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "label",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "enforce_wordlist",
                    "id": 6
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "WordRequest",
            "fields": [],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "WordAck",
            "fields": [
                {
                    "rule": "required",
                    "options": {},
                    "type": "string",
                    "name": "word",
                    "id": 1
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "SignMessage",
            "fields": [
                {
                    "rule": "repeated",
                    "options": {},
                    "type": "uint32",
                    "name": "address_n",
                    "id": 1
                },
                {
                    "rule": "required",
                    "options": {},
                    "type": "bytes",
                    "name": "message",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "options": {
                        "default": "Bitcoin"
                    },
                    "type": "string",
                    "name": "coin_name",
                    "id": 3
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "VerifyMessage",
            "fields": [
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "address",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bytes",
                    "name": "signature",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bytes",
                    "name": "message",
                    "id": 3
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "MessageSignature",
            "fields": [
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "address",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bytes",
                    "name": "signature",
                    "id": 2
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "EncryptMessage",
            "fields": [
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bytes",
                    "name": "pubkey",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bytes",
                    "name": "message",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "display_only",
                    "id": 3
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "DecryptMessage",
            "fields": [
                {
                    "rule": "repeated",
                    "options": {},
                    "type": "uint32",
                    "name": "address_n",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bytes",
                    "name": "message",
                    "id": 2
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "CipherKeyValue",
            "fields": [
                {
                    "rule": "repeated",
                    "options": {},
                    "type": "uint32",
                    "name": "address_n",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "key",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bytes",
                    "name": "value",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "encrypt",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "ask_on_encrypt",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "ask_on_decrypt",
                    "id": 6
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "EstimateTxSize",
            "fields": [
                {
                    "rule": "required",
                    "options": {},
                    "type": "uint32",
                    "name": "outputs_count",
                    "id": 1
                },
                {
                    "rule": "required",
                    "options": {},
                    "type": "uint32",
                    "name": "inputs_count",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "options": {
                        "default": "Bitcoin"
                    },
                    "type": "string",
                    "name": "coin_name",
                    "id": 3
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "TxSize",
            "fields": [
                {
                    "rule": "optional",
                    "options": {},
                    "type": "uint32",
                    "name": "tx_size",
                    "id": 1
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "SignTx",
            "fields": [
                {
                    "rule": "required",
                    "options": {},
                    "type": "uint32",
                    "name": "outputs_count",
                    "id": 1
                },
                {
                    "rule": "required",
                    "options": {},
                    "type": "uint32",
                    "name": "inputs_count",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "options": {
                        "default": "Bitcoin"
                    },
                    "type": "string",
                    "name": "coin_name",
                    "id": 3
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "SimpleSignTx",
            "fields": [
                {
                    "rule": "repeated",
                    "options": {},
                    "type": "TxInputType",
                    "name": "inputs",
                    "id": 1
                },
                {
                    "rule": "repeated",
                    "options": {},
                    "type": "TxOutputType",
                    "name": "outputs",
                    "id": 2
                },
                {
                    "rule": "repeated",
                    "options": {},
                    "type": "TransactionType",
                    "name": "transactions",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "options": {
                        "default": "Bitcoin"
                    },
                    "type": "string",
                    "name": "coin_name",
                    "id": 4
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "TxRequest",
            "fields": [
                {
                    "rule": "optional",
                    "options": {},
                    "type": "RequestType",
                    "name": "request_type",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "TxRequestDetailsType",
                    "name": "details",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "TxRequestSerializedType",
                    "name": "serialized",
                    "id": 3
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "TxAck",
            "fields": [
                {
                    "rule": "optional",
                    "options": {},
                    "type": "TransactionType",
                    "name": "tx",
                    "id": 1
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "FirmwareErase",
            "fields": [],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "FirmwareUpload",
            "fields": [
                {
                    "rule": "required",
                    "options": {},
                    "type": "bytes",
                    "name": "payload",
                    "id": 1
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "DebugLinkDecision",
            "fields": [
                {
                    "rule": "required",
                    "options": {},
                    "type": "bool",
                    "name": "yes_no",
                    "id": 1
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "DebugLinkGetState",
            "fields": [],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "DebugLinkState",
            "fields": [
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bytes",
                    "name": "layout",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "pin",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "matrix",
                    "id": 3
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "mnemonic",
                    "id": 4
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "HDNodeType",
                    "name": "node",
                    "id": 5
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bool",
                    "name": "passphrase_protection",
                    "id": 6
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "reset_word",
                    "id": 7
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "bytes",
                    "name": "reset_entropy",
                    "id": 8
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "recovery_fake_word",
                    "id": 9
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "uint32",
                    "name": "recovery_word_pos",
                    "id": 10
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "DebugLinkStop",
            "fields": [],
            "enums": [],
            "messages": [],
            "options": {}
        },
        {
            "name": "DebugLinkLog",
            "fields": [
                {
                    "rule": "optional",
                    "options": {},
                    "type": "uint32",
                    "name": "level",
                    "id": 1
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "bucket",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "options": {},
                    "type": "string",
                    "name": "text",
                    "id": 3
                }
            ],
            "enums": [],
            "messages": [],
            "options": {}
        }
    ],
    "enums": [
        {
            "name": "MessageType",
            "values": [
                {
                    "name": "MessageType_Initialize",
                    "id": 0
                },
                {
                    "name": "MessageType_Ping",
                    "id": 1
                },
                {
                    "name": "MessageType_Success",
                    "id": 2
                },
                {
                    "name": "MessageType_Failure",
                    "id": 3
                },
                {
                    "name": "MessageType_ChangePin",
                    "id": 4
                },
                {
                    "name": "MessageType_WipeDevice",
                    "id": 5
                },
                {
                    "name": "MessageType_FirmwareErase",
                    "id": 6
                },
                {
                    "name": "MessageType_FirmwareUpload",
                    "id": 7
                },
                {
                    "name": "MessageType_GetEntropy",
                    "id": 9
                },
                {
                    "name": "MessageType_Entropy",
                    "id": 10
                },
                {
                    "name": "MessageType_GetPublicKey",
                    "id": 11
                },
                {
                    "name": "MessageType_PublicKey",
                    "id": 12
                },
                {
                    "name": "MessageType_LoadDevice",
                    "id": 13
                },
                {
                    "name": "MessageType_ResetDevice",
                    "id": 14
                },
                {
                    "name": "MessageType_SignTx",
                    "id": 15
                },
                {
                    "name": "MessageType_SimpleSignTx",
                    "id": 16
                },
                {
                    "name": "MessageType_Features",
                    "id": 17
                },
                {
                    "name": "MessageType_PinMatrixRequest",
                    "id": 18
                },
                {
                    "name": "MessageType_PinMatrixAck",
                    "id": 19
                },
                {
                    "name": "MessageType_Cancel",
                    "id": 20
                },
                {
                    "name": "MessageType_TxRequest",
                    "id": 21
                },
                {
                    "name": "MessageType_TxAck",
                    "id": 22
                },
                {
                    "name": "MessageType_CipherKeyValue",
                    "id": 23
                },
                {
                    "name": "MessageType_ClearSession",
                    "id": 24
                },
                {
                    "name": "MessageType_ApplySettings",
                    "id": 25
                },
                {
                    "name": "MessageType_ButtonRequest",
                    "id": 26
                },
                {
                    "name": "MessageType_ButtonAck",
                    "id": 27
                },
                {
                    "name": "MessageType_GetAddress",
                    "id": 29
                },
                {
                    "name": "MessageType_Address",
                    "id": 30
                },
                {
                    "name": "MessageType_EntropyRequest",
                    "id": 35
                },
                {
                    "name": "MessageType_EntropyAck",
                    "id": 36
                },
                {
                    "name": "MessageType_SignMessage",
                    "id": 38
                },
                {
                    "name": "MessageType_VerifyMessage",
                    "id": 39
                },
                {
                    "name": "MessageType_MessageSignature",
                    "id": 40
                },
                {
                    "name": "MessageType_EncryptMessage",
                    "id": 48
                },
                {
                    "name": "MessageType_DecryptMessage",
                    "id": 49
                },
                {
                    "name": "MessageType_PassphraseRequest",
                    "id": 41
                },
                {
                    "name": "MessageType_PassphraseAck",
                    "id": 42
                },
                {
                    "name": "MessageType_EstimateTxSize",
                    "id": 43
                },
                {
                    "name": "MessageType_TxSize",
                    "id": 44
                },
                {
                    "name": "MessageType_RecoveryDevice",
                    "id": 45
                },
                {
                    "name": "MessageType_WordRequest",
                    "id": 46
                },
                {
                    "name": "MessageType_WordAck",
                    "id": 47
                },
                {
                    "name": "MessageType_DebugLinkDecision",
                    "id": 100
                },
                {
                    "name": "MessageType_DebugLinkGetState",
                    "id": 101
                },
                {
                    "name": "MessageType_DebugLinkState",
                    "id": 102
                },
                {
                    "name": "MessageType_DebugLinkStop",
                    "id": 103
                },
                {
                    "name": "MessageType_DebugLinkLog",
                    "id": 104
                }
            ],
            "options": {}
        }
    ],
    "imports": [
        {
            "package": null,
            "messages": [
                {
                    "ref": "google.protobuf.EnumValueOptions",
                    "fields": [
                        {
                            "rule": "optional",
                            "options": {},
                            "type": "bool",
                            "name": "wire_in",
                            "id": 50002
                        },
                        {
                            "rule": "optional",
                            "options": {},
                            "type": "bool",
                            "name": "wire_out",
                            "id": 50003
                        },
                        {
                            "rule": "optional",
                            "options": {},
                            "type": "bool",
                            "name": "wire_debug_in",
                            "id": 50004
                        },
                        {
                            "rule": "optional",
                            "options": {},
                            "type": "bool",
                            "name": "wire_debug_out",
                            "id": 50005
                        }
                    ]
                },
                {
                    "name": "HDNodeType",
                    "fields": [
                        {
                            "rule": "required",
                            "options": {},
                            "type": "uint32",
                            "name": "depth",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "options": {},
                            "type": "uint32",
                            "name": "fingerprint",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "options": {},
                            "type": "uint32",
                            "name": "child_num",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "options": {},
                            "type": "bytes",
                            "name": "chain_code",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "options": {},
                            "type": "bytes",
                            "name": "private_key",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "options": {},
                            "type": "bytes",
                            "name": "public_key",
                            "id": 6
                        }
                    ],
                    "enums": [],
                    "messages": [],
                    "options": {}
                },
                {
                    "name": "CoinType",
                    "fields": [
                        {
                            "rule": "optional",
                            "options": {},
                            "type": "string",
                            "name": "coin_name",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "options": {},
                            "type": "string",
                            "name": "coin_shortcut",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "options": {},
                            "type": "uint32",
                            "name": "address_type",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "options": {},
                            "type": "uint64",
                            "name": "maxfee_kb",
                            "id": 4
                        }
                    ],
                    "enums": [],
                    "messages": [],
                    "options": {}
                },
                {
                    "name": "MultisigRedeemScriptType",
                    "fields": [
                        {
                            "rule": "repeated",
                            "options": {},
                            "type": "bytes",
                            "name": "pubkeys",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "options": {},
                            "type": "bytes",
                            "name": "signatures",
                            "id": 2
                        }
                    ],
                    "enums": [],
                    "messages": [],
                    "options": {}
                },
                {
                    "name": "TxInputType",
                    "fields": [
                        {
                            "rule": "repeated",
                            "options": {},
                            "type": "uint32",
                            "name": "address_n",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "options": {},
                            "type": "bytes",
                            "name": "prev_hash",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "options": {},
                            "type": "uint32",
                            "name": "prev_index",
                            "id": 3
                        },
                        {
                            "rule": "optional",
                            "options": {},
                            "type": "bytes",
                            "name": "script_sig",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "options": {
                                "default": 4294967295
                            },
                            "type": "uint32",
                            "name": "sequence",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "options": {
                                "default": "SPENDADDRESS"
                            },
                            "type": "InputScriptType",
                            "name": "script_type",
                            "id": 6
                        },
                        {
                            "rule": "optional",
                            "options": {},
                            "type": "MultisigRedeemScriptType",
                            "name": "multisig",
                            "id": 7
                        }
                    ],
                    "enums": [],
                    "messages": [],
                    "options": {}
                },
                {
                    "name": "TxOutputType",
                    "fields": [
                        {
                            "rule": "optional",
                            "options": {},
                            "type": "string",
                            "name": "address",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "options": {},
                            "type": "uint32",
                            "name": "address_n",
                            "id": 2
                        },
                        {
                            "rule": "required",
                            "options": {},
                            "type": "uint64",
                            "name": "amount",
                            "id": 3
                        },
                        {
                            "rule": "required",
                            "options": {},
                            "type": "OutputScriptType",
                            "name": "script_type",
                            "id": 4
                        }
                    ],
                    "enums": [],
                    "messages": [],
                    "options": {}
                },
                {
                    "name": "TxOutputBinType",
                    "fields": [
                        {
                            "rule": "required",
                            "options": {},
                            "type": "uint64",
                            "name": "amount",
                            "id": 1
                        },
                        {
                            "rule": "required",
                            "options": {},
                            "type": "bytes",
                            "name": "script_pubkey",
                            "id": 2
                        }
                    ],
                    "enums": [],
                    "messages": [],
                    "options": {}
                },
                {
                    "name": "TransactionType",
                    "fields": [
                        {
                            "rule": "optional",
                            "options": {},
                            "type": "uint32",
                            "name": "version",
                            "id": 1
                        },
                        {
                            "rule": "repeated",
                            "options": {},
                            "type": "TxInputType",
                            "name": "inputs",
                            "id": 2
                        },
                        {
                            "rule": "repeated",
                            "options": {},
                            "type": "TxOutputBinType",
                            "name": "bin_outputs",
                            "id": 3
                        },
                        {
                            "rule": "repeated",
                            "options": {},
                            "type": "TxOutputType",
                            "name": "outputs",
                            "id": 5
                        },
                        {
                            "rule": "optional",
                            "options": {},
                            "type": "uint32",
                            "name": "lock_time",
                            "id": 4
                        },
                        {
                            "rule": "optional",
                            "options": {},
                            "type": "uint32",
                            "name": "inputs_cnt",
                            "id": 6
                        },
                        {
                            "rule": "optional",
                            "options": {},
                            "type": "uint32",
                            "name": "outputs_cnt",
                            "id": 7
                        }
                    ],
                    "enums": [],
                    "messages": [],
                    "options": {}
                },
                {
                    "name": "TxRequestDetailsType",
                    "fields": [
                        {
                            "rule": "optional",
                            "options": {},
                            "type": "uint32",
                            "name": "request_index",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "options": {},
                            "type": "bytes",
                            "name": "tx_hash",
                            "id": 2
                        }
                    ],
                    "enums": [],
                    "messages": [],
                    "options": {}
                },
                {
                    "name": "TxRequestSerializedType",
                    "fields": [
                        {
                            "rule": "optional",
                            "options": {},
                            "type": "uint32",
                            "name": "signature_index",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "options": {},
                            "type": "bytes",
                            "name": "signature",
                            "id": 2
                        },
                        {
                            "rule": "optional",
                            "options": {},
                            "type": "bytes",
                            "name": "serialized_tx",
                            "id": 3
                        }
                    ],
                    "enums": [],
                    "messages": [],
                    "options": {}
                }
            ],
            "enums": [
                {
                    "name": "FailureType",
                    "values": [
                        {
                            "name": "Failure_UnexpectedMessage",
                            "id": 1
                        },
                        {
                            "name": "Failure_ButtonExpected",
                            "id": 2
                        },
                        {
                            "name": "Failure_SyntaxError",
                            "id": 3
                        },
                        {
                            "name": "Failure_ActionCancelled",
                            "id": 4
                        },
                        {
                            "name": "Failure_PinExpected",
                            "id": 5
                        },
                        {
                            "name": "Failure_PinCancelled",
                            "id": 6
                        },
                        {
                            "name": "Failure_PinInvalid",
                            "id": 7
                        },
                        {
                            "name": "Failure_InvalidSignature",
                            "id": 8
                        },
                        {
                            "name": "Failure_Other",
                            "id": 9
                        },
                        {
                            "name": "Failure_NotEnoughFunds",
                            "id": 10
                        },
                        {
                            "name": "Failure_NotInitialized",
                            "id": 11
                        },
                        {
                            "name": "Failure_FirmwareError",
                            "id": 99
                        }
                    ],
                    "options": {}
                },
                {
                    "name": "OutputScriptType",
                    "values": [
                        {
                            "name": "PAYTOADDRESS",
                            "id": 0
                        },
                        {
                            "name": "PAYTOSCRIPTHASH",
                            "id": 1
                        }
                    ],
                    "options": {}
                },
                {
                    "name": "InputScriptType",
                    "values": [
                        {
                            "name": "SPENDADDRESS",
                            "id": 0
                        },
                        {
                            "name": "SPENDMULTISIG",
                            "id": 1
                        }
                    ],
                    "options": {}
                },
                {
                    "name": "RequestType",
                    "values": [
                        {
                            "name": "TXINPUT",
                            "id": 0
                        },
                        {
                            "name": "TXOUTPUT",
                            "id": 1
                        },
                        {
                            "name": "TXMETA",
                            "id": 2
                        },
                        {
                            "name": "TXFINISHED",
                            "id": 3
                        }
                    ],
                    "options": {}
                },
                {
                    "name": "ButtonRequestType",
                    "values": [
                        {
                            "name": "ButtonRequest_Other",
                            "id": 1
                        },
                        {
                            "name": "ButtonRequest_FeeOverThreshold",
                            "id": 2
                        },
                        {
                            "name": "ButtonRequest_ConfirmOutput",
                            "id": 3
                        },
                        {
                            "name": "ButtonRequest_ResetDevice",
                            "id": 4
                        },
                        {
                            "name": "ButtonRequest_ConfirmWord",
                            "id": 5
                        },
                        {
                            "name": "ButtonRequest_WipeDevice",
                            "id": 6
                        },
                        {
                            "name": "ButtonRequest_ProtectCall",
                            "id": 7
                        },
                        {
                            "name": "ButtonRequest_SignTx",
                            "id": 8
                        },
                        {
                            "name": "ButtonRequest_FirmwareCheck",
                            "id": 9
                        },
                        {
                            "name": "ButtonRequest_Address",
                            "id": 10
                        }
                    ],
                    "options": {}
                },
                {
                    "name": "PinMatrixRequestType",
                    "values": [
                        {
                            "name": "PinMatrixRequestType_Current",
                            "id": 1
                        },
                        {
                            "name": "PinMatrixRequestType_NewFirst",
                            "id": 2
                        },
                        {
                            "name": "PinMatrixRequestType_NewSecond",
                            "id": 3
                        }
                    ],
                    "options": {}
                }
            ],
            "imports": [],
            "options": {
                "java_package": "com.satoshilabs.trezor.protobuf",
                "java_outer_classname": "TrezorType"
            },
            "services": []
        }
    ],
    "options": {
        "java_package": "com.satoshilabs.trezor.protobuf",
        "java_outer_classname": "TrezorMessage"
    },
    "services": []
}).build();

module.exports = TrezorMessages;
