import { Box, Button, Flex, useDisclosure } from '@chakra-ui/react';
import { CopyButton, ClipboardButton } from 'components/Common';
import AceEditor from 'react-ace';

import 'ace-builds/src-min-noconflict/mode-abap';
import 'ace-builds/src-min-noconflict/mode-abc';
import 'ace-builds/src-min-noconflict/mode-actionscript';
import 'ace-builds/src-min-noconflict/mode-ada';
import 'ace-builds/src-min-noconflict/mode-alda';
import 'ace-builds/src-min-noconflict/mode-apache_conf';
import 'ace-builds/src-min-noconflict/mode-apex';
import 'ace-builds/src-min-noconflict/mode-applescript';
import 'ace-builds/src-min-noconflict/mode-aql';
import 'ace-builds/src-min-noconflict/mode-asciidoc';
import 'ace-builds/src-min-noconflict/mode-asl';
import 'ace-builds/src-min-noconflict/mode-assembly_x86';
import 'ace-builds/src-min-noconflict/mode-autohotkey';
import 'ace-builds/src-min-noconflict/mode-batchfile';
import 'ace-builds/src-min-noconflict/mode-c9search';
import 'ace-builds/src-min-noconflict/mode-cirru';
import 'ace-builds/src-min-noconflict/mode-clojure';
import 'ace-builds/src-min-noconflict/mode-cobol';
import 'ace-builds/src-min-noconflict/mode-coffee';
import 'ace-builds/src-min-noconflict/mode-coldfusion';
import 'ace-builds/src-min-noconflict/mode-crystal';
import 'ace-builds/src-min-noconflict/mode-csharp';
import 'ace-builds/src-min-noconflict/mode-csound_document';
import 'ace-builds/src-min-noconflict/mode-csound_orchestra';
import 'ace-builds/src-min-noconflict/mode-csound_score';
import 'ace-builds/src-min-noconflict/mode-csp';
import 'ace-builds/src-min-noconflict/mode-css';
import 'ace-builds/src-min-noconflict/mode-curly';
import 'ace-builds/src-min-noconflict/mode-c_cpp';
import 'ace-builds/src-min-noconflict/mode-d';
import 'ace-builds/src-min-noconflict/mode-dart';
import 'ace-builds/src-min-noconflict/mode-diff';
import 'ace-builds/src-min-noconflict/mode-django';
import 'ace-builds/src-min-noconflict/mode-dockerfile';
import 'ace-builds/src-min-noconflict/mode-dot';
import 'ace-builds/src-min-noconflict/mode-drools';
import 'ace-builds/src-min-noconflict/mode-edifact';
import 'ace-builds/src-min-noconflict/mode-eiffel';
import 'ace-builds/src-min-noconflict/mode-ejs';
import 'ace-builds/src-min-noconflict/mode-elixir';
import 'ace-builds/src-min-noconflict/mode-elm';
import 'ace-builds/src-min-noconflict/mode-erlang';
import 'ace-builds/src-min-noconflict/mode-forth';
import 'ace-builds/src-min-noconflict/mode-fortran';
import 'ace-builds/src-min-noconflict/mode-fsharp';
import 'ace-builds/src-min-noconflict/mode-fsl';
import 'ace-builds/src-min-noconflict/mode-ftl';
import 'ace-builds/src-min-noconflict/mode-gcode';
import 'ace-builds/src-min-noconflict/mode-gherkin';
import 'ace-builds/src-min-noconflict/mode-gitignore';
import 'ace-builds/src-min-noconflict/mode-glsl';
import 'ace-builds/src-min-noconflict/mode-gobstones';
import 'ace-builds/src-min-noconflict/mode-golang';
import 'ace-builds/src-min-noconflict/mode-graphqlschema';
import 'ace-builds/src-min-noconflict/mode-groovy';
import 'ace-builds/src-min-noconflict/mode-haml';
import 'ace-builds/src-min-noconflict/mode-handlebars';
import 'ace-builds/src-min-noconflict/mode-haskell';
import 'ace-builds/src-min-noconflict/mode-haskell_cabal';
import 'ace-builds/src-min-noconflict/mode-haxe';
import 'ace-builds/src-min-noconflict/mode-hjson';
import 'ace-builds/src-min-noconflict/mode-html';
import 'ace-builds/src-min-noconflict/mode-html_elixir';
import 'ace-builds/src-min-noconflict/mode-html_ruby';
import 'ace-builds/src-min-noconflict/mode-ini';
import 'ace-builds/src-min-noconflict/mode-io';
import 'ace-builds/src-min-noconflict/mode-jack';
import 'ace-builds/src-min-noconflict/mode-jade';
import 'ace-builds/src-min-noconflict/mode-java';
import 'ace-builds/src-min-noconflict/mode-javascript';
import 'ace-builds/src-min-noconflict/mode-json';
import 'ace-builds/src-min-noconflict/mode-json5';
import 'ace-builds/src-min-noconflict/mode-jsoniq';
import 'ace-builds/src-min-noconflict/mode-jsp';
import 'ace-builds/src-min-noconflict/mode-jssm';
import 'ace-builds/src-min-noconflict/mode-jsx';
import 'ace-builds/src-min-noconflict/mode-julia';
import 'ace-builds/src-min-noconflict/mode-kotlin';
import 'ace-builds/src-min-noconflict/mode-latex';
import 'ace-builds/src-min-noconflict/mode-latte';
import 'ace-builds/src-min-noconflict/mode-less';
import 'ace-builds/src-min-noconflict/mode-liquid';
import 'ace-builds/src-min-noconflict/mode-lisp';
import 'ace-builds/src-min-noconflict/mode-livescript';
import 'ace-builds/src-min-noconflict/mode-logiql';
import 'ace-builds/src-min-noconflict/mode-logtalk';
import 'ace-builds/src-min-noconflict/mode-lsl';
import 'ace-builds/src-min-noconflict/mode-lua';
import 'ace-builds/src-min-noconflict/mode-luapage';
import 'ace-builds/src-min-noconflict/mode-lucene';
import 'ace-builds/src-min-noconflict/mode-makefile';
import 'ace-builds/src-min-noconflict/mode-markdown';
import 'ace-builds/src-min-noconflict/mode-mask';
import 'ace-builds/src-min-noconflict/mode-matlab';
import 'ace-builds/src-min-noconflict/mode-maze';
import 'ace-builds/src-min-noconflict/mode-mediawiki';
import 'ace-builds/src-min-noconflict/mode-mel';
import 'ace-builds/src-min-noconflict/mode-mips';
import 'ace-builds/src-min-noconflict/mode-mixal';
import 'ace-builds/src-min-noconflict/mode-mushcode';
import 'ace-builds/src-min-noconflict/mode-mysql';
import 'ace-builds/src-min-noconflict/mode-nginx';
import 'ace-builds/src-min-noconflict/mode-nim';
import 'ace-builds/src-min-noconflict/mode-nix';
import 'ace-builds/src-min-noconflict/mode-nsis';
import 'ace-builds/src-min-noconflict/mode-nunjucks';
import 'ace-builds/src-min-noconflict/mode-objectivec';
import 'ace-builds/src-min-noconflict/mode-ocaml';
import 'ace-builds/src-min-noconflict/mode-pascal';
import 'ace-builds/src-min-noconflict/mode-perl';
import 'ace-builds/src-min-noconflict/mode-pgsql';
import 'ace-builds/src-min-noconflict/mode-php';
import 'ace-builds/src-min-noconflict/mode-php_laravel_blade';
import 'ace-builds/src-min-noconflict/mode-pig';
import 'ace-builds/src-min-noconflict/mode-plain_text';
import 'ace-builds/src-min-noconflict/mode-powershell';
import 'ace-builds/src-min-noconflict/mode-praat';
import 'ace-builds/src-min-noconflict/mode-prisma';
import 'ace-builds/src-min-noconflict/mode-prolog';
import 'ace-builds/src-min-noconflict/mode-properties';
import 'ace-builds/src-min-noconflict/mode-protobuf';
import 'ace-builds/src-min-noconflict/mode-puppet';
import 'ace-builds/src-min-noconflict/mode-python';
import 'ace-builds/src-min-noconflict/mode-qml';
import 'ace-builds/src-min-noconflict/mode-r';
import 'ace-builds/src-min-noconflict/mode-raku';
import 'ace-builds/src-min-noconflict/mode-razor';
import 'ace-builds/src-min-noconflict/mode-rdoc';
import 'ace-builds/src-min-noconflict/mode-red';
import 'ace-builds/src-min-noconflict/mode-redshift';
import 'ace-builds/src-min-noconflict/mode-rhtml';
import 'ace-builds/src-min-noconflict/mode-rst';
import 'ace-builds/src-min-noconflict/mode-ruby';
import 'ace-builds/src-min-noconflict/mode-rust';
import 'ace-builds/src-min-noconflict/mode-sass';
import 'ace-builds/src-min-noconflict/mode-scad';
import 'ace-builds/src-min-noconflict/mode-scala';
import 'ace-builds/src-min-noconflict/mode-scheme';
import 'ace-builds/src-min-noconflict/mode-scrypt';
import 'ace-builds/src-min-noconflict/mode-scss';
import 'ace-builds/src-min-noconflict/mode-sh';
import 'ace-builds/src-min-noconflict/mode-sjs';
import 'ace-builds/src-min-noconflict/mode-slim';
import 'ace-builds/src-min-noconflict/mode-smarty';
import 'ace-builds/src-min-noconflict/mode-smithy';
import 'ace-builds/src-min-noconflict/mode-snippets';
import 'ace-builds/src-min-noconflict/mode-soy_template';
import 'ace-builds/src-min-noconflict/mode-space';
import 'ace-builds/src-min-noconflict/mode-sparql';
import 'ace-builds/src-min-noconflict/mode-sql';
import 'ace-builds/src-min-noconflict/mode-sqlserver';
import 'ace-builds/src-min-noconflict/mode-stylus';
import 'ace-builds/src-min-noconflict/mode-svg';
import 'ace-builds/src-min-noconflict/mode-swift';
import 'ace-builds/src-min-noconflict/mode-tcl';
import 'ace-builds/src-min-noconflict/mode-terraform';
import 'ace-builds/src-min-noconflict/mode-tex';
import 'ace-builds/src-min-noconflict/mode-text';
import 'ace-builds/src-min-noconflict/mode-textile';
import 'ace-builds/src-min-noconflict/mode-toml';
import 'ace-builds/src-min-noconflict/mode-tsx';
import 'ace-builds/src-min-noconflict/mode-turtle';
import 'ace-builds/src-min-noconflict/mode-twig';
import 'ace-builds/src-min-noconflict/mode-typescript';
import 'ace-builds/src-min-noconflict/mode-vala';
import 'ace-builds/src-min-noconflict/mode-vbscript';
import 'ace-builds/src-min-noconflict/mode-velocity';
import 'ace-builds/src-min-noconflict/mode-verilog';
import 'ace-builds/src-min-noconflict/mode-vhdl';
import 'ace-builds/src-min-noconflict/mode-visualforce';
import 'ace-builds/src-min-noconflict/mode-wollok';
import 'ace-builds/src-min-noconflict/mode-xml';
import 'ace-builds/src-min-noconflict/mode-xquery';
import 'ace-builds/src-min-noconflict/mode-yaml';
import 'ace-builds/src-min-noconflict/mode-zeek';

import 'ace-builds/src-min-noconflict/theme-ambiance';
import 'ace-builds/src-min-noconflict/theme-chaos';
import 'ace-builds/src-min-noconflict/theme-chrome';
import 'ace-builds/src-min-noconflict/theme-clouds';
import 'ace-builds/src-min-noconflict/theme-clouds_midnight';
import 'ace-builds/src-min-noconflict/theme-cobalt';
import 'ace-builds/src-min-noconflict/theme-crimson_editor';
import 'ace-builds/src-min-noconflict/theme-dawn';
import 'ace-builds/src-min-noconflict/theme-dracula';
import 'ace-builds/src-min-noconflict/theme-dreamweaver';
import 'ace-builds/src-min-noconflict/theme-eclipse';
import 'ace-builds/src-min-noconflict/theme-github';
import 'ace-builds/src-min-noconflict/theme-gob';
import 'ace-builds/src-min-noconflict/theme-gruvbox';
import 'ace-builds/src-min-noconflict/theme-idle_fingers';
import 'ace-builds/src-min-noconflict/theme-iplastic';
import 'ace-builds/src-min-noconflict/theme-katzenmilch';
import 'ace-builds/src-min-noconflict/theme-kr_theme';
import 'ace-builds/src-min-noconflict/theme-kuroir';
import 'ace-builds/src-min-noconflict/theme-merbivore';
import 'ace-builds/src-min-noconflict/theme-merbivore_soft';
import 'ace-builds/src-min-noconflict/theme-monokai';
import 'ace-builds/src-min-noconflict/theme-mono_industrial';
import 'ace-builds/src-min-noconflict/theme-nord_dark';
import 'ace-builds/src-min-noconflict/theme-one_dark';
import 'ace-builds/src-min-noconflict/theme-pastel_on_dark';
import 'ace-builds/src-min-noconflict/theme-solarized_dark';
import 'ace-builds/src-min-noconflict/theme-solarized_light';
import 'ace-builds/src-min-noconflict/theme-sqlserver';
import 'ace-builds/src-min-noconflict/theme-terminal';
import 'ace-builds/src-min-noconflict/theme-textmate';
import 'ace-builds/src-min-noconflict/theme-tomorrow';
import 'ace-builds/src-min-noconflict/theme-tomorrow_night';
import 'ace-builds/src-min-noconflict/theme-tomorrow_night_blue';
import 'ace-builds/src-min-noconflict/theme-tomorrow_night_bright';
import 'ace-builds/src-min-noconflict/theme-tomorrow_night_eighties';
import 'ace-builds/src-min-noconflict/theme-twilight';
import 'ace-builds/src-min-noconflict/theme-vibrant_ink';
import 'ace-builds/src-min-noconflict/theme-xcode';

import 'ace-builds/src-min-noconflict/ext-language_tools';
// @ts-ignore
import beautify from 'ace-builds/src-min-noconflict/ext-beautify';

import SettingsModal from './SettingsModal';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { getCurrentSettings } from './settings';

interface Props {
  mode: string;
  value: string;
  onChange: (value: string, event?: any) => void;
  readOnly?: boolean;
  hidesCopy?: boolean;
  hidesBeautify?: boolean;
  height?: string;
  debounceChangePeriod?: number;
  leftAddon?: ReactElement;
}

const CodeEditor = ({
  mode,
  value,
  onChange,
  readOnly,
  hidesCopy,
  hidesBeautify,
  height,
  debounceChangePeriod,
  leftAddon,
}: Props) => {
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  const [settings, setSettings] = useState(getCurrentSettings);

  const editorRef = useRef<any>();

  useEffect(() => {
    if (!isOpenModal) {
      setSettings(getCurrentSettings);
    }
  }, [isOpenModal]);

  return (
    <Box>
      <AceEditor
        ref={editorRef}
        mode={mode}
        theme={settings.theme}
        width="100%"
        height={height ?? '500px'}
        value={value}
        onChange={onChange}
        name="code-editor"
        debounceChangePeriod={debounceChangePeriod}
        fontSize={settings.fontSize}
        tabSize={settings.tabSize}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        readOnly={!!readOnly}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
      />
      <Flex justifyContent="space-between" mt="2">
        <Flex justifyContent="start" gap="2">
          <Button h="1.75rem" size="sm" onClick={onOpenModal}>
            Settings
          </Button>
          {!hidesBeautify && (
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => {
                beautify.beautify(editorRef.current.editor.session);
              }}
            >
              Beautify
            </Button>
          )}
          {leftAddon}
        </Flex>
        <Flex justifyContent="end" gap="2">
          {!readOnly && <ClipboardButton onClick={onChange} />}
          {!hidesCopy && <CopyButton value={value} />}
        </Flex>
      </Flex>

      <SettingsModal isOpen={isOpenModal} onClose={onCloseModal} />
    </Box>
  );
};

export default CodeEditor;
