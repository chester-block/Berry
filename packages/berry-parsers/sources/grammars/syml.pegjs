{
  const INDENT_STEP = 2;

  let indentLevel = 0;
}

Start
  = PropertyStatements

ItemStatements
  = statements:ItemStatement* { return [].concat(... statements) }

ItemStatement
  = Samedent "#" (!EOL .)+ EOL+ { return [] }
  / Samedent "-" B+ value:Expression { return value }

PropertyStatements
  = statements:PropertyStatement* { return Object.assign({}, ... statements) }

PropertyStatement
  = Samedent "#" (!EOL .)+ EOL+ { return {} }
  / Samedent property:Name B? ":" B? value:Expression { return {[property]: value} }
  // Compatibility with the old lockfile format (key-values without a ":")
  / Samedent property:LegacyName B value:Literal EOL+ { return {[property]: value} }
  // Compatibility with the old lockfile format (multiple keys for a same value)
  / Samedent property:Name others:(B? "," B? other:Name { return other })+ B? ":" B? value:Expression { return Object.assign({}, ... [property].concat(others).map(property => ({[property]: value}))) }

Expression
  = EOL Indent statements:PropertyStatements Dedent { return statements }
  / EOL Indent statements:ItemStatements Dedent { return statements }
  / expression:Literal EOL+ { return expression }

Samedent "correct indentation"
  = spaces:" "* &{ return spaces.length === indentLevel * INDENT_STEP }

Indent
  = &{ indentLevel++; return true }

Dedent
  = &{ indentLevel--; return true }

Name
  = string
  / pseudostring

LegacyName
  = string
  / pseudostringLegacy

Literal
  = null
  / string
  / pseudostring

/**
 */

pseudostring "pseudostring"
  = (!Sc ![-?:,\][{}#&*!|>'"%@`] .) (B? !Sc ![,\][{}:#] .)* B? { return text().replace(/^ *| *$/g, '') }

pseudostringLegacy
  = [a-zA-Z\/-] (![^\r\n :,].)* B? { return text().replace(/^ *| *$/g, '') }

/**
 * String parsing
 */

null
  = "null" { return null }

string "string"
  = '"' '"' { return "" }
  / '"' chars:chars '"' { return chars }

chars
  = chars:char+ { return chars.join(``) }

char
  = [^"\\\0-\x1F\x7f]
  / '\\"' { return `"` }
  / "\\\\" { return `\\` }
  / "\\/" { return `/`  }
  / "\\b" { return `\b` }
  / "\\f" { return `\f` }
  / "\\n" { return `\n` }
  / "\\r" { return `\r` }
  / "\\t" { return `\t` }
  / "\\u" h1:hexDigit h2:hexDigit h3:hexDigit h4:hexDigit {
      return String.fromCharCode(parseInt(`0x${h1}${h2}${h3}${h4}`));
    }

hexDigit
  = [0-9a-fA-F]

/**
 * Spaces
 */

B "blank space"
  = Bc+

Bc
  = [ \t]

S "white space"
  = Sc+

Sc
  = [ \t\r\n]

EOL
  = "\r\n"
  / "\n"
  / "\r"
