import { IconProps } from 'react-native-vector-icons/Icon'

export type GitHubIcon =
  | 'alert'
  | 'archive'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-ref_type-down'
  | 'arrow-right'
  | 'arrow-small-left'
  | 'arrow-small-right'
  | 'arrow-small-up'
  | 'arrow-up'
  | 'beaker'
  | 'bell'
  | 'bold'
  | 'book'
  | 'bookmark'
  | 'briefcase'
  | 'broadcast'
  | 'browser'
  | 'bug'
  | 'calendar'
  | 'check'
  | 'checklist'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'circle-slash'
  | 'circuit-board'
  | 'clippy'
  | 'clock'
  | 'cloud-download'
  | 'cloud-upload'
  | 'code'
  | 'comment'
  | 'comment-discussion'
  | 'credit-card'
  | 'dash'
  | 'dashboard'
  | 'database'
  | 'desktop-download'
  | 'device-camera'
  | 'device-camera-video'
  | 'device-desktop'
  | 'device-mobile'
  | 'diff'
  | 'diff-added'
  | 'diff-ignored'
  | 'diff-modified'
  | 'diff-removed'
  | 'diff-renamed'
  | 'ellipses'
  | 'ellipsis'
  | 'eye'
  | 'file'
  | 'file-binary'
  | 'file-code'
  | 'file-directory'
  | 'file-media'
  | 'file-pdf'
  | 'file-submodule'
  | 'file-symlink-directory'
  | 'file-symlink-file'
  | 'file-text'
  | 'file-zip'
  | 'flame'
  | 'fold'
  | 'gear'
  | 'gift'
  | 'gist'
  | 'gist-secret'
  | 'git-branch'
  | 'git-commit'
  | 'git-compare'
  | 'git-merge'
  | 'git-pull-request'
  | 'globe'
  | 'grabber'
  | 'graph'
  | 'heart'
  | 'history'
  | 'home'
  | 'horizontal-rule'
  | 'hubot'
  | 'inbox'
  | 'info'
  | 'issue-closed'
  | 'issue-opened'
  | 'issue-reopened'
  | 'italic'
  | 'jersey'
  | 'key'
  | 'keyboard'
  | 'law'
  | 'light-bulb'
  | 'link'
  | 'link-external'
  | 'list-ordered'
  | 'list-unordered'
  | 'location'
  | 'lock'
  | 'logo-gist'
  | 'logo-github'
  | 'mail'
  | 'mail-read'
  | 'mail-reply'
  | 'mark-github'
  | 'markdown'
  | 'megaphone'
  | 'mention'
  | 'milestone'
  | 'mirror'
  | 'mortar-board'
  | 'mute'
  | 'no-newline'
  | 'note'
  | 'octoface'
  | 'organization'
  | 'package'
  | 'paintcan'
  | 'pencil'
  | 'person'
  | 'pin'
  | 'plug'
  | 'plus'
  | 'plus-small'
  | 'primitive-dot'
  | 'primitive-square'
  | 'project'
  | 'pulse'
  | 'question'
  | 'quote'
  | 'radio-tower'
  | 'reply'
  | 'repo'
  | 'repo-clone'
  | 'repo-force-push'
  | 'repo-forked'
  | 'repo-pull'
  | 'repo-push'
  | 'rocket'
  | 'rss'
  | 'ruby'
  | 'screen-full'
  | 'screen-normal'
  | 'search'
  | 'server'
  | 'settings'
  | 'shield'
  | 'sign-in'
  | 'sign-out'
  | 'smiley'
  | 'squirrel'
  | 'star'
  | 'stop'
  | 'sync'
  | 'tag'
  | 'tasklist'
  | 'telescope'
  | 'terminal'
  | 'text-size'
  | 'three-bars'
  | 'thumbsdown'
  | 'thumbsup'
  | 'tools'
  | 'trashcan'
  | 'triangle-down'
  | 'triangle-left'
  | 'triangle-right'
  | 'triangle-up'
  | 'unfold'
  | 'unmute'
  | 'unverified'
  | 'verified'
  | 'versions'
  | 'watch'
  | 'x'
  | 'zap'

export interface OcticonIconProps extends IconProps {
  name: GitHubIcon
}